import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart ,setInCart]=useState(false)
  const addItemToCart=()=>{
    setInCart(!inCart)
  }
  return (
    <li className={inCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove": "add"}onClick={addItemToCart}>
        {inCart? "Remove from Cart": "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
