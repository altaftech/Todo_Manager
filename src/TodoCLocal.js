import React from 'react'

class TodoCLocal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todo: [],
            isEditing: false,
            currentIndex: null
        };
    }
    componentDidMount() {
        const todos = localStorage.getItem('todos')
        if (todos) {
            this.setState({ todo: JSON.parse(todos) })
        }
    }

    Add = () => {
        if (this.state.text) {
            if (this.state.isEditing) {
                const newTodos = [...this.state.todo]
                newTodos[this.state.currentIndex] = this.state.text
                this.setState({
                    todo: newTodos,
                    isEditing: false,
                    currentIndex: null,
                    text: ''
                })
                localStorage.setItem('todos',JSON.stringify(newTodos))
            }
            else {
                const newTodos = [...this.state.todo, this.state.text]
                this.setState({
                    todo: newTodos,
                    text: ''
                })
                localStorage.setItem('todos',JSON.stringify(newTodos))
            }
        }
    }
    Edit = (index) => {
        this.setState({
            text: this.state.todo[index],
            isEditing: true,
            currentIndex: index
        })
    }
    Delete = (index) => {
        const newTodos = this.state.todo.filter((_, i) => i !== index)
        this.setState({ todo: newTodos })
        localStorage.setItem('todos',JSON.stringify(newTodos))
    }
    render() {
        return (
            <>
                <h1>Todo with LocalStorage in Class component</h1>
                <input type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                <input type="button" value={this.state.isEditing ? "Update" : "Add"} onClick={this.Add} />
                <ul>
                    {
                        this.state.todo.map((element, index) => (
                            <li key={index}>
                                {element}
                                <button onClick={() => this.Edit(index)}>Edit</button>
                                <button onClick={() => this.Delete(index)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default TodoCLocal;