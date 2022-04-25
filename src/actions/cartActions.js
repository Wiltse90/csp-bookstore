import { devToolsEnhancer } from "redux-devtools-extension";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import products from "../prod";


export const addToCart = (id, qty) => async(dispatch, getState) => {
    
    let data = {}
    products.find((p) => {if(p._id == id){data = p}})

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}