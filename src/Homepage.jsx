import React from 'react'
import { Data } from './Cart/data';

import Itemcard from './Itemcard';
const Homepage = () => {
  return (
    <div>
      
      <div className='cardContainer'>
        {
          Data.map((product)=><Itemcard product={product} key={product.id}/>)
        }
      </div>
    </div>
  )
}

export default Homepage
