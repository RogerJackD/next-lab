import React from 'react'
import { useFetch } from '../hooks'



export function UserDataForm() {

    useFetch()

  return (
    <form action="">

          <label htmlFor="">username</label>
          <input type="text" className='border mx-2' name='username' placeholder='enter name' />

            <br />

            
          <label htmlFor="">lastaname</label>
          <input type="text" className='border mx-2' name='lastaname' placeholder='enter lastname' />


          <label htmlFor="">date</label>
          <input type="text" className='border mx-2' name='date' placeholder='enter data' />
    </form>
  )
}
