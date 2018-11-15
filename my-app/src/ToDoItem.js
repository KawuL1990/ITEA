import React, { memo } from 'react'

const ToDoItem = ({id, theme, text, deleteTodo, changeStatus, done}) => {
    return (
        <div>
            <h1>{theme}</h1>
            <p>{text}</p>
            <button onClick={() => deleteTodo(id)}>Delet ToDo</button>
            <button style={done ? {background: 'green'} : {background: 'red'}} onClick={() => changeStatus(id)}>
                {
                    done ? "Done" : "In process"
                }
            </button>
        </div>
    )
}

export default memo(ToDoItem)