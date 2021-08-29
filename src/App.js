import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm'
import TodoList from './components/Todo/TodoList'
import db from './firebase'
import firebase from 'firebase'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    db.collection('todo')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text })),
        ),
      )
  }, [])

  const addTodos = (enteredTodos) => {
    db.collection('todo').add({
      text: enteredTodos,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setTodos((prev) => [
      ...prev,
      { text: enteredTodos, id: Math.floor(Math.random() * 100) },
    ])
  }

  const removeTodos = (id) => {
    // setTodos((prev) => prev.filter((todo) => todo.id !== id))
    db.collection('todo').doc(id).delete()
  }

  return (
    <div>
      <h2>Todo-List App</h2>
      <InputForm onAdd={addTodos} />
      <ul>
        {todos.map((todo) => (
          <TodoList
            key={Math.floor(Math.random() * 100)}
            todo={todo.text}
            id={todo.id}
            onRemove={removeTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
