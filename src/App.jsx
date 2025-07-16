import { useState } from "react";
import Home from "./components/Home";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  };

  return (
    <>
      <Home />
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Result userInput={userInput}/>
    </>
  );
}

export default App;
