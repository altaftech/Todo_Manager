import React, { useState } from 'react'

import './App.css';

function App() {
  const [txt, setTxt] = useState('')
  const [todo, setTodo] = useState([])
  const Add = () => {
    //Alphabets in order with skip feature
    if (txt) {

      const char = txt.toUpperCase();

      if (char.length === 1 && /^[A-Z]$/.test(char)) {
        if (todo.length === 0 || char > todo[todo.length - 1]) {
          setTodo([...todo, char]);
          setTxt(""); 
        } else {
          alert(`Please enter the next alphabet in order. The next valid character is: ${String.fromCharCode(todo[todo.length - 1].charCodeAt(0) + 1)}`);
        }
      } else {
        alert("Please enter a single uppercase alphabet.");
      }
    }

    //alphabets in order without skip any alphabet among them
    // if (txt) {
    //   const char = txt.toUpperCase();
    
    //   if (char.length === 1 && /^[A-Z]$/.test(char)) {
    //     // Check if the list is empty or the entered char is the next in sequence
    //     const lastChar = todo.length === 0 ? 'A' : String.fromCharCode(todo[todo.length - 1].charCodeAt(0) + 1);
    
    //     if (char === lastChar) {
    //       setTodo([...todo, char]);
    //       setTxt(""); 
    //     } else {
    //       alert(`Please enter the next alphabet in order. The next valid character is: ${lastChar}`);
    //     }
    //   } else {
    //     alert("Please enter a single uppercase alphabet.");
    //   }
    // }
    

  }
  return (
    <>
      <h1>Todo App - Alphabet in order</h1>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <input type="button" value="Add" onClick={Add} />
      <ul>
        {
          todo.map((element,index)=>(
            <li key={index}>{element}</li>
          ))
        }
      </ul>

    </>
  );
}

export default App;
