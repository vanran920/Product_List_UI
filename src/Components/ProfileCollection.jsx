import React from 'react'

const ProfileCollection = (props) => {
  return (
    <div className='p-4 border rounded-lg shadow-md text-center'>
       <img src={props.image} className='w-full h-40 object-cover  ' />
       <h1 className='text-lg font-bold mt-2'>{props.name}</h1>
       <p className='text-gray-600' >₹{props.price}</p>
       <p className='text-amber-400'>{props.ratings}⭐</p>
       <button className='mt-2 bg-blue-600 text-white px-4 py-1 rounded' onClick={() => alert("Added To Cart")} >Add To cart</button>
    </div>
  )
}

export default ProfileCollection
