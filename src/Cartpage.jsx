import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Itemcard from './Itemcard'
const Cartpage = () => {
  const cart=useSelector(state=>{
    return state.custom
  })
  console.log(cart)
  return (
    <div className='cardContainer'>
      {
        cart.cart.map((product)=><Itemcard product={product} key={product.id}/>)
      }
    </div>
  )
}

export default Cartpage
