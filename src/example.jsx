import React from "react"
import ReactDOM from "react-dom"

// ReactClass
const Title = function(props) {
  // props => Um objeto literal (um dicionário)
  // que vai ter como atributo todas as propriedades
  // passadas
  
  const [count, setCount] = React.useState(0)
  
  return (<h1 onClick={() => setCount(count + 1)} >
    {props.title} - {count}
  </h1>)
}

// Props e State

// Props => propriedades passadas como par
// State => Variavél de estado que a ser atualizada redenriza o componente.

// ReactClass
const App = function(props) {
  return (
    <React.Fragment>
      <div>
        <Title title="Meu Componente!" />
        <Title title="Meeeeeeeu Componente!" />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root-react"))
