

import React, { useEffect } from 'react'

export const useFetch = () => {

    useEffect(() => {
      
        console.log('effect')
    
      return () => {
        console.log('salida de use effect')
      }
    }, []);
    

  return 
}
