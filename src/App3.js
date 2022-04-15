import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function App3() {

  ///----------------- STate /variable
  STate = variables 

   const [word,setWord] = useState('word')

   const [name,setName] = useState('intialValue')

    const [data,setData]= useState([])
  
  

    //------------------- funtcionts

    const changeWord=()=>{
      word = 'asdasd'
        setWord('anotherString')
  
    }

    useEffect(()=>{
   
      axios.get('./bacssdk').then((res)=>{
          setData(res.data)
      })
        })


 //--------------------------------- Dsiplay / html
  return (
    <div>App3

    <p>App 3</p>
        <button onClick={changeWord}>click me</button>
        <p>{word}</p>
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


