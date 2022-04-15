import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.production.min'

export default function UserWorld() {

    const [worlds,setWorlds] = useState([])

    useEffect(()=>{

   
    axios.get(`/asdfsdfwuserwold${useid}`).then(
        setWorlds(res.data)
    )
    })

return (
   <div className='userworldsroute'>
       <header></header>
       <main>
        <UserNavigatorBar/>
        <div className='worldsdisplay'>
            
        </div>



       </main>



   </div>
  )
}
