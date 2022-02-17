import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../redux/actions/TodoAction'

const TaskItem = ({todo}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className={todo.isDone ? "done" : null}> {todo.task} </div>
      <button onClick={()=>dispatch(completeTask(todo.id))}>{todo.isDone ? "undo" : "complete"}</button>
      <button onClick={()=>dispatch(deleteTask(todo.id))}>Delete</button>
    </div>
  )
}

export default TaskItem
