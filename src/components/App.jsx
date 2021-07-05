import React from "react"

import FormPeople from './FormPeople'
import ListPeople from './ListPeople'

const App = (props) => {
  return (
    <React.Fragment> 
      <FormPeople />
      <hr/>
      <ListPeople />
    </React.Fragment>
  )
}

export default App

