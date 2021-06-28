import React from "react"


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

export default FormPeople
