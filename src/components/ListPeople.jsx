import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import EmployeeDuck from "../ducks/EmployeeDuck"

const ListPeople = ({ employees, removeEmployee }) => {
  return (
    <section style={{ marginTop: '10px'}} >
      <ul id='listPeople'> 
        {
          employees.map((elem, idx) => {
            return (
              <li key={idx} >
                {elem.name} - {elem.age}

                <button 
                  style={{ marginLeft: "4px" }}
                  onClick={() => removeEmployee(idx)}
                >
                  Deletar ({idx})
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

ListPeople.propTypes = {
  employees: PropTypes.array,
  removeEmployee: PropTypes.func
}

ListPeople.defaultProps = {
  employees: [],
  removeEmployee: () => undefined
}

// Camada de integração do componente com o redux
// Mapear Dados para o props
const mapStateToProps = (store) => ({
  employees: store.employees.employees
})

// Mapear Actions para o props
const mapDispatchToProps = (dispatch) => ({
  removeEmployee: (idx) => dispatch(
    EmployeeDuck.creators.removeEmployee(idx)
    // ({ type: ...., name, age })
  ) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPeople);
