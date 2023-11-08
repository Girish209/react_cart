import {createReducer} from '@reduxjs/toolkit'
import { Data } from './data'
const initialState={
    product:Data,
    cart:[],
}

export const reducer=createReducer(initialState,{
    ADD_TO_CART:(state,action)=>{
        const cartItem=state.product.filter((curElem)=>{
                return curElem.id ===action.payload
            })
        return{
            ...state,cart:state.cart.concat(cartItem)
        }
    },
    clearCart:(state)=>{
        return{
           ...state,cart:[]
        }
    }
})