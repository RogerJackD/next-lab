import React from 'react'
import {useCounter} from '../hooks';

export function counterComponent() {


   const { increment, decrement, reset, counter } = useCounter( 99 );

  return (
    <div className='items-center'>
        <h1>counter {counter} </h1>
0
        <button className='border py-1 px-2'
        onClick={increment}
        >+1</button>

        <br />

        <button 
        onClick={decrement}
        className='border py-1 px-2'>-1</button>

        <br />

        <button 
        onClick={reset}
        className='border py-1 px-2'>reset</button>

    </div>
  )
}