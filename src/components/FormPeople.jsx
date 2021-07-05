import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import EmployeeDuck from "../ducks/EmployeeDuck"

const FormPeople = ({ addEmployee, ...props }) => {
  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState(0)

  return (
    <section>
      <article>
        <label> Nome: </label>
        <input 
          id='name' 
          type='text' 
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </article>
      <article>
        <label> Idade: </label>
        <input
          id='age' 
          type='number'
          value={age}
          onChange={(evt) => setAge(evt.target.value)}
        />
      </article>
      <article style={{ marginTop: '4px' }} >
        <button 
           id='form-button'
          onClick={() => addEmployee({ name, age })}
        >
          Salvar
        </button>
      </article>
    </section>
  )
}

FormPeople.propTypes = {
  addEmployee: PropTypes.func
}

FormPeople.defaultProps = {
  addEmployee: () => undefined
}

// Camada de integração do componente com o redux
// Mapear Dados para o props
const mapStateToProps = () => ({})

// Mapear Actions para o props
const mapDispatchToProps = (dispatch) => ({
  addEmployee: ({ name, age }) => dispatch(
    EmployeeDuck.creators.addEmployee(name, age)
    // ({ type: ...., name, age })
  ) 
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPeople)
