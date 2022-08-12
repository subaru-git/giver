import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <>
      <input
        type="button"
        value="Send"
        onClick={async () => {
          console.log("Send");
          const res = await axios.get(
            "http://localhost:8080/echo?message=Hello"
          );
          console.log(res.data);
        }}
      />
    </>
  );
}

export default App;
