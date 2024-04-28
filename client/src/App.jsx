import { useState, useEffect } from 'react'
import './App.css'
import { TextBox } from './components/TextBox';
import axios from 'axios';
import mainLogo from './components/image.png';


function App() {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");

  const fetchAPI = async () => {
    // const response = await axios({url: "http://localhost:8080/getinput", method: "post", timeout: 8000, headers:{
    //   'Content-Type' : 'application/json',
    // }})
    // console.log("fetching")
    // console.log(response.data);
    // setArray(response.data);
    const response = await axios.get(`http://localhost:8080/api/users?search=${input}`)
    console.log(response.data);
    // setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI()
  }, [])

  const handleSubmit = () => {
    fetchAPI()
  }

  return (
    <>
      <h1>b-AI-max</h1>
      <img src={mainLogo} width = {300} height = {300} />
      <div className="card">
      <div className = "text-box">
        <form onSubmit={handleSubmit}>

        <TextBox input = {input} setInput = {setInput}/>
        </form>
        

      </div>
          {array.map((users, index) => (
            <span key={index}>{users}</span>
          ))}
      </div>
    </>
  )
}

export default App
