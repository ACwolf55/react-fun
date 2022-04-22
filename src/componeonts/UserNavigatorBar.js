import React from 'react'



export default function UserNavigatorBar(props) {

    const [asdas, setAdast] = useState(true)

    const [worlds,setWorlds] = useState([5])


    useEffect(() => {
        
    console.log(props.specialNumber)
    console.log(props.exampleWorlds)
    
    }, [])
    
  let obj = {name:'sdfsd',number:5}

  return (
      <div className='user-nav-bar'>
    <div>UserNavigatorBar</div>
    <p>{props.specialNumber}</p>

    </div>
  )
  }
