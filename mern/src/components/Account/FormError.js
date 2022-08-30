import React from 'react'

export default function FormError({errors}) {
    
    const renderError =()=>{
        if(Object.keys(errors).length > 0){
            return Object.keys(errors).map((key,index)=> (
                <li key={index}>{errors[key]}</li>
            ))
        }
    }
  return (
    <>
      <ul>
       {renderError()}
       
      </ul>
    </>
  )
}
