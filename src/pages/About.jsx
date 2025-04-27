import { useLocalStorage } from "../components/useLocalStorage";
import { useState } from "react";

const About = () => {
  const [value, setValue] = useState("");

  const { setItem, getItem, removeItem } = useLocalStorage("name");

  return (
    <>
      <h1>Local Storage Test</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setItem(value)}>Set</button>
      <button onClick={() => console.log(getItem())}>Get</button>
      <button onClick={removeItem}>Remove</button>
    </>
  );
};

export default About;
