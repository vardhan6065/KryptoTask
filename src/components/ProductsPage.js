import React from "react";
import classes from './ProductsPage.module.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ProductCard from "./ProductCard";
import { data } from "../store/db";

//This Component is to display the products available in the shop!!
const ProductsPage = () =>{

    //product data being stored in variable to be mapped to dispalay in products tab.
    const Products=data.products;
     
    return (
        //containe showing all the products
        <div className={classes.container}>
            {Products.map((item)=>(
                <div className={classes.mediacarddiv}>
                    <ProductCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        stars={item.rating}
                        price={item.amount}
                        image={item.image}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductsPage;