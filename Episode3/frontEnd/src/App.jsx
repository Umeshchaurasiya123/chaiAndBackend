import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  //const [count, setCount] = useState(0)
  const [jokes,setJokes]=useState([])

  useEffect(()=>{

    axios.get('api/jokes')
    // here i was doing mistake. i was uisng axios.get('http://localhost:3000/api/jokes')

    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  })
  return (
    <>
    <h1>chai aur code frontend</h1>
    <p>JOKES:{jokes.length} </p>

    {
      jokes.map((Jokeobj,index)=>{
       
        return(
          <div key={Jokeobj.id}>
          <h3>{Jokeobj.title}</h3>
          <h4>{Jokeobj.content}</h4>
          </div>
        )
        
      })

    }

    </>
  )
}

export default App
