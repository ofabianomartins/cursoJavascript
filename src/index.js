// Gerência de estado
let employees = [] // variável de estados


// Alteração da employeers => renderizar a tag ul#listPeople
function addEmployee(employee) {
  const newEmployees = [ ...employees, employee]

  // employees.push(employee)
  employees = newEmployees
  renderListPeople(newEmployees)
}

function removeEmployee(employeeID) {
  const removeEmployees = employees.filter((elem, idx) => employeeID != idx)

  employees = removeEmployees
  renderListPeople(removeEmployees)
}

// Renderização de components
function renderListPeople(employees) {
  let listPeople = document.getElementById('listPeople')
  listPeople.innerHTML = '' // Remover qualquer lixo

  employees.forEach((item, idx) => {
    const novoLi = document.createElement("li")
    novoLi.innerHTML = `${item.name} - ${item.age}` //adiciona a label

    const novoButton = document.createElement("button")

    novoButton.innerText = `Deletar ${idx}`
    novoButton.style.marginLeft = '10px'

    novoButton.addEventListener('click', () => {
      removeEmployee(idx)
    })

    novoLi.appendChild(novoButton) // adiciona o botão de deletar
    
    listPeople.appendChild(novoLi)
  })
}

function onLoad() {
  document.getElementById('form-button')
    .addEventListener('click', (evt) => {
      // Coletar os dados do formulário
      const name = document.getElementById('name').value
      const age = document.getElementById('age').value

      // Formatar os dados
      const employee = { name, age }

      addEmployee(employee)

    })
}

onLoad();



