import Duck from "extensible-duck"

export default new Duck({
  namespace: 'employees',
  store: 'employees',
  types: ['ADD_EMPLOYEE', 'REMOVE_EMPLOYEE'],
  initialState: { employees: [] },
  reducer: (state, action, duck) => {
    // Descobrir qual é a action que eu estou recebendo
    // Aplicar no state o efeito dessa action
    // Retornar esse novo state
    // Caso não conheça essa action, retorno o state atual
    
    if (action.type === duck.types.ADD_EMPLOYEE) {
      const employee = { name: action.name, age: action.age }
      return { employees: [ ...state.employees, employee ] }
    } else if (action.type === duck.types.REMOVE_EMPLOYEE) {
      return { 
        employees: state.employees.filter((ele, idx) => idx !== action.id)
      }
    } else {
      return state;
    }
  },
  creators: (duck) => ({
    addEmployee: (name, age) => ({
      type: duck.types.ADD_EMPLOYEE, name, age
    }),
    removeEmployee: (id) => ({ type: duck.types.REMOVE_EMPLOYEE, id })
  })
})
