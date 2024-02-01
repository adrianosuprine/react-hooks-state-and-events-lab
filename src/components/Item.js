import React,{ useState }from "react";

function Item({ name, category }) {
  const [updateCart, setUpdateCart] = useState ()
  const handleCart = () => {
    setUpdateCart(inCart => !inCart)
  }
  const cartClass = updateCart ? "in-cart" : ""
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={`Items ${updateCart ?"remove" : "add"}`} onClick={handleCart}>{updateCart ?"Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
