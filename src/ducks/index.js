// import de libs 
import { createStore, combineReducers } from "redux"

import EmployeeDuck from "./EmployeeDuck"

// combinar os reducers num reducer principal
const reducers = combineReducers({
  [EmployeeDuck.store]: EmployeeDuck.reducer
})

// criamos a nossa store vazia (X0)
const store = createStore(reducers)

// Pode fazer um setup de informação na store
//      - Dados de api
//      - carregar dados do storage

//Exporta a store para seu usando no app

export default store
