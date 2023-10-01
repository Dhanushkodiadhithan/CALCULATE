import Inputcomponent from './Inputcomponent';
import Answer from './result';
import { useState } from "react";
function App() {
  const [num1,setnum1] = useState('');  
  const [num2,setnum2] = useState('');  
  const [op,setop] = useState('');  
  const [ans,setans] = useState('');
  return(
    <>
    <h2 align="center"> CALCULATE</h2>
    <Inputcomponent num1={num1} num2={num2} op={op} setnum1={setnum1} setnum2={setnum2} setop={setop}/>
    <Answer no1={num1} no2={num2} op={op} setans={setans} ans={ans}/>
    </>
  )
}

export default App;
