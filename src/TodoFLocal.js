import React, { useState, useEffect } from 'react'
import './TodoF.css';

const TodoFLocal = () => {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  // const [todo, setTodo] = useState(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   return savedTodos ? JSON.parse(savedTodos) : [];
  // });
  const [isEditing, setIsEditing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)


  useEffect(() => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      setTodo(JSON.parse(todos));
    }
  }, []);

  const Add = () => {
    if (text) {
      if (isEditing) {
        let newTodos = [...todo]
        newTodos[currentIndex] = text
        setTodo(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setIsEditing(false)
        setCurrentIndex(null)
      } else {
        setTodo([...todo, text])
        localStorage.setItem("todos", JSON.stringify([...todo, text]));

      }
      setText("")
    }
  }
  const Edit = (index) => {
    setText(todo[index])
    setIsEditing(true)
    setCurrentIndex(index)
  }
  const Delete = (index) => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">Todo with LocalStorage</h1>
        <div className="input-group">
          <input
            className="todo-input"
            type="text"
            placeholder="Enter a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="todo-btn" onClick={Add}>
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
        <ul className="todo-list">
          {
            todo.map((element, index) => (
              <li key={index} className="todo-item">
                            <span className="todo-text">{element}</span>
                            <div className="btn-group">
                                <button className="btn edit-btn" onClick={() => Edit(index)}>
                                    Edit
                                </button>
                                <button className="btn delete-btn" onClick={() => Delete(index)}>
                                    Delete
                                </button>
                            </div>
                        </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default TodoFLocal
