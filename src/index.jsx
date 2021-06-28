import React from "react"
import ReactDOM from "react-dom"

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

const App = (props) => {
  const [employees, setEmployees] = React.useState([])

  return (
    <React.Fragment> 
      <FormPeople
        addEmployee={(employee) => setEmployees([...employees, employee])} 
      />
      <hr/>
      <ListPeople 
        employees={employees}
        removeEmployee={(employeeId) => {
          setEmployees(employees.filter((elem, idx) => idx != employeeId))
        }}
      />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
