import { CART_ADD_ITEM } from "../constants/cartConstants";
import products from '../prod'
export const cartReducer = (state = {cartItems: []}, action) => {
    
    switch(action.type) {
        case CART_ADD_ITEM:

            const item = action.payload
            
            let existItem = {}
            try{
                JSON.parse(state.cartItems).map((p) => {if(p._id == id){data = p}})
            }catch{

            }
            

            //const existItem = Array(state.cartItems).find(x => x.product === item.product)
            /**...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x) */
            console.log(state.cartItems)

            if(existItem == undefined) { 
                console.log("FIRST")
                return {
                    ...state, 
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
                }else{
                    console.log("Second")
                    return {
                        ...state,
                        cartItems: [...state.cartItems, item]
                    }
            }
        default:
            return state
    }
}