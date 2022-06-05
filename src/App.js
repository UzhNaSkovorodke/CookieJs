import React from "react";
import Form from "./form";
import Info from "./info";
import WeatherInfo from "./Weather-info";

const API_KEY = "6d1fb31189f01f61b6892ff3800658cf";

class App extends React.Component {
  gettingWeather = async () => {
    const api_url = await fetch(``);
  };

  render() {
    return (
      <div>
        <h1>Hey</h1>
        <Info></Info>
        <Form></Form>
        <WeatherInfo></WeatherInfo>
      </div>
    );
  }
}
export default App;
