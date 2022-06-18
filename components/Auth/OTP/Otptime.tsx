import React, { useState,useEffect } from 'react'

type Props = {}

export default function Otptime({}: Props) {

    

    const [counter, setcounter] = useState(50)

    useEffect(() => {

        const timer:any = counter > 0 && setInterval( () => {

          
                setcounter(counter-1) 
            
        
          },1000)

        
     
      return () => {
        clearInterval(timer)
      }
    }, [counter])
    
  return (
    <div><p>0:{counter}</p></div>
  )
}