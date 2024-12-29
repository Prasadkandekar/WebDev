import React from 'react'

const Card = (props) => {
  return (
    
    <div className='mr-5 mt-5 bg-blue-300 text-center  text-gray-900 inline-block rounded-xl mx-10  px-10 py-15 '>
        <img className='ml-8  p-3 h-32 w-32 rounded-full mb-3'src={props.photo} alt="Profile_Photo" />
        
        <h1 className='text-xl  m-3'> {props.name}</h1>
        <h3 className='text-gray-500'>{props.profession}</h3>

        <h2 > {props.city} , {props.age}</h2>
       
        <button className='mt-5 mb-2 bg-indigo-700 text-white px-4 py-2 rounded font-medium hover:bg-indigo-800 hover:cursor-pointer'>Connect +</button>
    </div>
   
  )
}

export default Card