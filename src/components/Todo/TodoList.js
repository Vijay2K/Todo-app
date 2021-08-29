import React, { Fragment, useState } from 'react'
import Modal from '../UI/ModalPopUp'
import TodoListClass from './TodoList.module.css'

const TodoList = (props) => {
  const [open, setOpen] = useState(false)
  // const [hasEdited, setHasEdited] = useState(false)
  // const [editedInput, setEditedInput] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const handleHasEdited = (edited) => {
  //   setHasEdited(edited)
  // }

  // const setEditTodo = (editedTodo) => {
  //   setEditedInput(editedTodo)
  // }

  const removeTodoHandler = () => {
    props.onRemove(props.id)
  }

  return (
    <Fragment>
      <Modal
        id={props.id}
        todo={props.todo}
        onOpen={open}
        onClose={handleClose}
        // onHasEdited={handleHasEdited}
        // onEdit={setEditTodo}
      />
      <div className={TodoListClass['todo-list']}>
        <li>{props.todo}</li>
        <button onClick={handleOpen}>
          <img
            src="https://img.icons8.com/material-rounded/24/000000/edit--v1.png"
            alt="edit"
          />
        </button>
        <button onClick={removeTodoHandler}>
          <img
            src="https://img.icons8.com/material-sharp/24/000000/double-tick.png"
            alt="tick"
          />
        </button>
      </div>
    </Fragment>
  )
}

export default TodoList
