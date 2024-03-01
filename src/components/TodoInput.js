import React, { useState } from 'react'

function TodoInput(props) {

    const [inputText, setInputText] = useState('');
    const handleEnterPress=(e=>{
      if(e.keyCode===13){
        props.addList(inputText);
        setInputText('');
      }
    })

  return (
    <div className='inputdiv'>
      <input type='text' placeholder='Enter your task' value={inputText} onKeyDown={handleEnterPress} onChange={e=>{setInputText(e.target.value)}}></input>
      <button type="button" className="btn btn-danger" onClick={()=>{
        props.addList(inputText)
        setInputText("")
    }}>+</button>
    </div>
  )
}

export default TodoInput
