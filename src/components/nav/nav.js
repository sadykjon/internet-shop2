import React, { useContext, useEffect, useState } from "react";
import { services } from "../../Services/Services";
import { MyContext } from "../../Context/My-Context";
import { ProductState } from "../../Context/Product-state";

const Nav = () => {
    const { getCategoryState } = useContext(MyContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await services.getCategories();
            console.log(result.data);
            setCategories(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="nav-menu">
            <h2>Category Products</h2>
            <ol>
                {categories.map((category) => (
                    <li>{category}</li>
                    
                ))}
            </ol>
        </div>
    );
};

export default Nav;
