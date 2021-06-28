import React from "react"

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


export default ListPeople;
