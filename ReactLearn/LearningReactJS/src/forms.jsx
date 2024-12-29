import React, { useState } from 'react'
 


const ReactForms = () => {

    const [username, setUsername] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(username)
        setUsername('')
    }
  return (
    <>
    {/* Understanding Two Way Binding */}
    <form className='w-full max-w-sm'onSubmit={(e)=>{
        submitHandler(e)
    }}>
    <div className='flex items-center border-b border-teal-500 py-2'>
        <input  value ={username} onChange={(e)=>{
            setUsername(e.target.value)
        }} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder='Enter Your Name' />
        <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ' type='submit'>Submit</button>
        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">Cancel</button>
    </div>
    </form>
    </>
  )
}

export default ReactForms