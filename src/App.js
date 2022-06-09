import React from "react";
import Form from "./form";
import "./style.css";

const cpicok = [
  { id: 1, text: "Скинуть бабки Марии" },
  { id: 1, text: "Скинуть бабки Анастаси" },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Form></Form>
      </div>
    );
  }
}
export default App;
