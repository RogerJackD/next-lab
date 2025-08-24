'use client'
import { useState } from 'react';
import { UserDataForm } from './components'

function Home() {

  const [ isActive, setIsActive ] = useState(false);



  
  return (
    <>

        <button
        className='border py-1 px-3 rounded'
        onClick={ () => setIsActive(!isActive)}
        > show : { isActive ? "active" : "inactive" } </button>

        {
          isActive && 
          <UserDataForm/>
        }


 

    </>
  )
}

export default Home