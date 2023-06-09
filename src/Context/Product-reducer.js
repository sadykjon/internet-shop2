import { GET_CATEGORY,GET_ALLPRODUCTS } from "./Types";




export const ProductReducer=(state, action) =>{
    switch(action.type){
        case GET_CATEGORY:{
            return {
                ...state,
                categories: action.payload
            }
        }
        case GET_ALLPRODUCTS:{
            return {
               ...state,
                products: action.payload
            }
        }
        default:
            return state;
    }
    }
