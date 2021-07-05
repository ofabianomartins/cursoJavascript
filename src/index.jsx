import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { App } from './components'
import store from './ducks'

// Linkar o App component com a nossa store
const MainApp = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(MainApp, document.getElementById('root'))
