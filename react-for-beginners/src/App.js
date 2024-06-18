import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = ((event) => setToDo(event.target.value));
  const onSubmit = ((event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    } 
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
    // setToDos(function(currentArray) {
    //   return [toDo, ...currentArray];
    // });
  });
  return (
    <div>
      <h1>My To DOs ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"  
          onChange={onChange} 
          value={toDo} 
          placeholder="Wrtie your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ol>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))};
      </ol>
    </div>
  )
}
  export default App;
