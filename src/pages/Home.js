import React, { useContext, useEffect, useReducer } from 'react'
import CartItem from '../components/cart-item/cart-item'
import { services } from '../Services/Services'
import { MyContext } from '../Context/My-Context'

function Home({ addToCart }) {
    const {products, getAllProductsState}=useContext(MyContext)
    useEffect(() => {
        const data = async () => {
            const product = await services.allProducts()
            // console.log(product)
            getAllProductsState(product.data.products)
        }
        data()
    }, [])
console.log("product", products);
    return (
        <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
            {
                products.map((product,index) => {
                    return <CartItem onClick={() => addToCart(product.id)} key={index} {...product} children="Add To Cart" />
                })
            }
        </div>
    )
}

export default Home