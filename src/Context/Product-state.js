import { GET_CATEGORY, GET_ALLPRODUCTS } from "./Types";
import { useReducer } from "react";
import { MyContext } from "./My-Context";
import { ProductReducer } from "./Product-reducer";
import React,{ useEffect} from "react";


export const ProductState = ({children})=>{
    const initialState = {
        categories: [],
        products: [],
    }
    const [state, dispatch] = useReducer(ProductReducer,initialState);
    const getCategoryState=(data)=>dispatch({type:GET_CATEGORY,payload:data})
    const getAllProductsState=(data)=>dispatch({type:GET_ALLPRODUCTS,payload:data})
    


    return (
            <MyContext.Provider value={{
                categories: state.categories,
                products: state.products,
                getCategoryState,
                getAllProductsState
            }}>
                {children}
            </MyContext.Provider>
        )
}