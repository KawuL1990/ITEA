const initialState = {
    todos: [],
}

export default function Todo(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return state = {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return state = {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case 'CHANGE_TODO':
            return state = {
                ...state,
                todos: state.todos.map(item => {
                        if(item.id === action.payload){
                            item.done = !item.done
                        }
                        return item
                    }
                )
            }
        default:
            return state
    }
}
