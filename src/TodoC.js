import React from 'react'
class TodoC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todo: [],
            isEditing: false,
            currentIndex: null
        };
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
            } else {
                this.setState({
                    todo: [...this.state.todo, this.state.text],
                    text: ''
                })
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
    }
    render() {
        return (
            <>
                <h1>Todo App</h1>
                <input type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                <input type="button" value={this.state.isEditing ? "Update" : "Add"} onClick={this.Add} />
                <ul>
                    {
                        this.state.todo.map((element, index) => (
                            <li key={index}>{element} 
                            <button onClick={()=>this.Edit(index)}>Edit</button>
                            <button onClick={()=>this.Delete(index)}>Delete</button></li>
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default TodoC;



//With destructuring states
// import React, { Component } from 'react';

// class TodoC extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txt: '',
//       todo: [],
//       isEditing: false,
//       currentIndex: null
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ txt: e.target.value });
//   };

//   addOrUpdateTodo = () => {
//     const { txt, todo, isEditing, currentIndex } = this.state;

//     if (txt) {
//       if (isEditing) {
//         let updatedTodos = [...todo];
//         updatedTodos[currentIndex] = txt;
//         this.setState({
//           todo: updatedTodos,
//           isEditing: false,
//           currentIndex: null,
//           txt: ''
//         });
//       } else {
//         this.setState({
//           todo: [...todo, txt],
//           txt: ''
//         });
//       }
//     }
//   };

//   editTodo = (index) => {
//     this.setState({
//       txt: this.state.todo[index],
//       isEditing: true,
//       currentIndex: index
//     });
//   };

//   deleteTodo = (index) => {
//     const updatedTodos = this.state.todo.filter((_, i) => i !== index);
//     this.setState({ todo: updatedTodos });
//   };

//   render() {
//     return (
//       <>
//         <h1>Todo</h1>
//         <input
//           type="text"
//           value={this.state.txt}
//           onChange={this.handleInputChange}
//         />
//         <input
//           type="button"
//           value={this.state.isEditing ? 'Update' : 'Add'}
//           onClick={this.addOrUpdateTodo}
//         />
//         <ul>
//           {this.state.todo.map((element, index) => (
//             <li key={index}>
//               {element}
//               <button onClick={() => this.editTodo(index)}>Edit</button>
//               <button onClick={() => this.deleteTodo(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default TodoC;
