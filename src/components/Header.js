import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const Header = () => {
  const items = useSelector(state => state.cart)
  const total = items.reduce((a,b)=>a+b.price,0)
  console.log(items)
  return (
    <div className='flex justify-between'>
      <h1 className='m-2 p-2'>SHOPPIE</h1>
      <div className='flex'>
        <Link to="/" className='m-2 px-4 py-8 no-underline text-xl'>HOME</Link>
        <p className='m-2 px-4 py-8 font-bold text-green-600 font-mono text-xl'>CART VALUE: $ {total}</p>
        <Link to="/cart" className='p-3'><button className='text-3xl text-red-400 rounded-md m-2 py-2'>🛒{items.length}</button></Link>
      </div>
      
    </div>
  )
}

export default Header