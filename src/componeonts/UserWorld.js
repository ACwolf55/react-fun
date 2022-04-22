import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.production.min'
import UserNavigatorBar from './UserNavigatorBar'

export default function UserWorld() {

    const [worlds,setWorlds] = useState([])

    const [specialNumber,setSpecialNumber] = useState(8)

    const [name,setName] = useState(intialValue)

    const [logged, setLogged] = useState(false)


    useEffect(()=>{

   
    axios.get(`/asdfsdfwuserwold${useid}`).then(
        setWorlds(res.data)
    )
    })

return (
   <div className='userworldsroute'>
       <header></header>
       <main>

        <UserNavigatorBar
         specialNumber={specialNumber} 
        exampleWorlds={words} 
        />

        <Landing logged={logged} />

        <div className='worldsdisplay'>
            
        </div>



       </main>



   </div>
  )
}
