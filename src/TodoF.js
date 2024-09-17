import React, { useState } from 'react';
import './TodoF.css'; // Add external stylesheet if needed

const TodoF = () => {
    const [txt, setTxt] = useState("");
    const [todo, setTodo] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const Add = () => {
        if (txt) {
            if (isEditing) {
                let updatedTodos = [...todo];
                updatedTodos[currentIndex] = txt;
                setTodo(updatedTodos);
                setIsEditing(false);
                setCurrentIndex(null);
            } else {
                setTodo([...todo, txt]);
            }
            setTxt("");
        }
    };

    const Edit = (index) => {
        setTxt(todo[index]);
        setIsEditing(true);
        setCurrentIndex(index);
    };

    const Delete = (index) => {
        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
    };

    return (
        <>
            <div className="todo-container">
                <h1 className="todo-title">Todo List</h1>
                <div className="input-group">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="Enter a task"
                        value={txt}
                        onChange={(e) => setTxt(e.target.value)}
                    />
                    <button className="todo-btn" onClick={Add}>
                        {isEditing ? "Update" : "Add"}
                    </button>
                </div>
                <ul className="todo-list">
                    {todo.map((element, index) => (
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
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoF;
