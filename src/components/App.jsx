import React from "react"

import FormPeople from './FormPeople'
import ListPeople from './ListPeople'

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

export default App

