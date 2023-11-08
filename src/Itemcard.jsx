import React from 'react'
import { useDispatch } from 'react-redux'
const Itemcard = ({product}) => {
    const dispatch=useDispatch();
    const addToCart=(id)=>{
        
        dispatch({type:'ADD_TO_CART',payload:id});
    }
  return (
    <div className='itemCard'>
      <div className='image'>
        <img src={product.src} alt="item" />
      </div>
      <div className='desc'>
        <h1>{product.item}</h1>
        <h3>{product.price}</h3>
      </div>
      <div>
        <button className='btn' onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Itemcard
