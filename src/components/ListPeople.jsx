import React from "react"
import PropTypes from "prop-types"

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

export default ListPeople;
