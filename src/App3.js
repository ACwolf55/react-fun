import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function App3() {

  ///----------------- STate /variable
  State = variables 

  const [x ,y ] = useState(z)

  const [name,setName] = useState('intialValue')
  
  const [data,setData]= useState([])
  
  const [word,setWord] = useState('dragon')
    //------------------- funtcionts

    
    useEffect(()=>{

      
      axios.get('./bacssdk').then((res)=>{
        console.log(res.data)
        setData(res.data)

      
      })
      
    },[])
    
    const changeWord=()=>{
    
        setWord('anotherString')
    
    }

 //--------------------------------- Dsiplay / html
  return (
    <div>App3

    <p>App 3</p>
        <button onClick={changeWord}>click me</button>
        <p>{word}</p>
        <p>word</p>
        <div>
          
    { data.length === 0
        ?
      <p>loading</p>
      :
     data.map((el)=>{
      return((
        <>
          <p>{el.name}</p>
          <p>{el.id}</p>
          <img src={el.imgurl}></img>
        </>
      ))
      })
    }
      </div>
    </div>
  )
}


