import React from "react";

export default function GuessInput({handlesubmitdata}){
    const [input, setinput] = React.useState('') 


    function handlesubmit(event){
      event.preventDefault()

      handlesubmitdata(input)
    }
    return(
      <>
     <form  onSubmit={handlesubmit}>
    <label htmlFor='guess'>Enter guess:</label>
    <input id='guess' type='text' value={input} onChange={((event) => {
      setinput(event.target.value)
    })}  />
  </form>
  </>
    )
}