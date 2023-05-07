import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
const Product = ({product : {image, name, slug, price}}) => {
  const {  qty, onAdd } = useStateContext();
  return <div>
    <Link href={`product/${slug.current}`}>
      <div className="product-card">
        <img src={urlFor(image && image[0])} alt="" width={250} height={250} className="product-image" />
        <div className="cart-added"> <p className="product-name">{(name).slice(0,15)} </p>
       
        </div>
       

        <p className="product-price">${price} </p>
        
      </div>
    </Link>
  </div>;
};


export default Product;
