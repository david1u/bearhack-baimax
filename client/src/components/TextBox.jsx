import React, {useState} from 'react'

import "./TextBox.css";
import { FaPencilAlt } from 'react-icons/fa'
import axios from 'axios';



export const TextBox = ({input, setInput}) => {
  const [output, setOutput] = useState("")

    const listener = (event,value) => {
      if (event.code === "Enter"){
        console.log("enter")
        console.log(input)


    axios.post("http://localhost:8080/getinput", {body: input,
    }).then((response) => { setOutput(response.data.CALL)})
    .then((error) => console.log(error));

        event.preventDefault();
      }
    }
    const handleChange =(value)=> {
      setInput(value)
    }

    // document.addEventListener("keydown", listener)
  return (
    <>
    
   
    <div className="input-wrapper">
      <FaPencilAlt id="pencil-icon"/>
      <input 
          placeholder="What would you like to ask bAImax?" 
          value={input}
          onChange={(e) =>handleChange(e.target.value)} 
          onKeyDown={(e) => listener(e,input)}
          
        />

        
      </div>
      {output}
      </>

      
  )
}

// const onFormSubmit = e => {
//   e.preventDefault();
//   //in the post
// }

 

