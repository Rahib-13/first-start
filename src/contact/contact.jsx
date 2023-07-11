import React from 'react'

const Contact = () => {
  return (
    <>
    <form style={{display:"flex", flexDirection:"column"}}>

        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='email'/>
        <textarea name="" id="" cols="30" rows="10"  placeholder='Message...'></textarea>
        <button type='submit'>Nalla getsin</button>
    </form>
    
    
    
    </>
  )
}

export default Contact