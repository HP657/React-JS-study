import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(() => {
    console.log("Run only once")
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("Search for " + keyword);
    }
  }, [keyword]);
  useEffect(() => {
    if (counter !== 0){
      console.log("Counter " + counter)
    }
  }, [counter]);
  useEffect(() => {
    if (counter !== 0 || keyword !== "") {
      console.log("Both");
    }
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
/* <div>
  <h1 className={styles.title}>Welcome Back!</h1>
  <Button text={"Continue"}/>
</div> */
export default App;
