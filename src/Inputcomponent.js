
const Inputcomponent = ({num1,num2,op,setnum1,setnum2,setop}) => {
   

    return(
        <>
         <h3>NUMBER 1 : <input type="number" placeholder="0" value={num1} onChange={(e)=>{setnum1(parseInt(e.target.value))}}/></h3>
      
        <h3>NUMBER 2 : <input type="number" placeholder="0" value={num2} onChange={(e)=>{setnum2(parseInt(e.target.value))}}/></h3>

        <h3>SELECT THE OPERATOR :<select value={op} onChange={(e)=>{setop(e.target.value)}}>
            <option value=''></option>
            <option value='add'>ADD</option>
            <option value='sub'>SUB</option>
            <option value='mul'>MUL</option>
            <option value='div'>DIV</option>
        </select></h3>
        
        
        
        </>
    )
}
export default Inputcomponent;