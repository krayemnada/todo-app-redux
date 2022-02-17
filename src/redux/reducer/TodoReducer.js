
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../types/Index";



const initialState ={
    todos: [
         {id:Math.random(),task:"learn js", isDone:false},
         {id:Math.random(),task:"learn react", isDone:true},
         {id:Math.random(),task:"learn EX6", isDone:false},


    ]
}
const todoReducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case COMPLETE_TASK:
            return {...state,todos:state.todos.map(elt=> elt.id===payload ? {...elt,isDone:!elt.isDone} : elt)}
        case DELETE_TASK :
            return {...state,todos:state.todos.filter(elt => elt.id !== payload)}
        case ADD_TASK :
            return {...state, todos:[...state.todos,payload]}

        case EDIT_TASK:
            return {...state,todos:state.todos.map(elt => elt.id ===payload.id ? {...elt,task:payload.value}: elt)}
        default:
            return state;
    }

}
export default todoReducer