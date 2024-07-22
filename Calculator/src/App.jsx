import "./App.css";
import Heading from "./Component/Heading";
import UserInput from "./Component/UserInput";
import ItemButtons from "./Component/ItemButtons";
import { useState } from "react";
const App = () => {
  const itembuttons= ['%','C','DEL','/',
    '7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];

  const [userInput,setUserInput] = useState('');

  const handleInput = (buttontext) => {
    if (buttontext === 'C'){
      setUserInput('')
    }else if(buttontext === '='){
      const result =eval(userInput)
      setUserInput(result.toString());
    }else if(buttontext === 'DEL') {
      console.log(userInput,'current')
      setUserInput(userInput.slice(0, -1));
    }else{
      const newtext = userInput + buttontext;
      setUserInput(newtext)
    }
  }
  return (
    <>
      <center className="kg-center">
        <div className="kg-container">
          <div className="inner-container">
          <Heading />
          <UserInput userInput={userInput} />
          <ItemButtons itembuttons={itembuttons} onClickInput={handleInput}/>
          </div>
        </div>
      </center>
    </>
  );
};

export default App;
