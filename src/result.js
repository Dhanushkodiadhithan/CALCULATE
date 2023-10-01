

const Answer = ({no1,no2,op,ans,setans}) =>{

  
    const handler =((e)=>{
        if(op!== '' && no1!=='' && no2!==''){
            if (op==='add') {
                setans(no1+no2);
            } 
            else if(op==='sub') { 
                setans(no1 - no2);
            }
            else if (op==='mul'){ 
                setans(no1 * no2);
            }
            else if (op==='div'){ 
                setans(no1 / no2);
            }
        }

    })
    return(
    <>
        <button onClick={handler}> ANSWER :</button>
        <input type="number" value={ans}/>
    </>
)
}
export default Answer;