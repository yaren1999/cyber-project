"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      setCartItems(cart ? JSON.parse(cart) : []);
    }
  }, []);

  if (cartItems.length === 0) {
    return <p>Sepetin boş 😢</p>;
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Sepetiniz</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <img src={item.image} alt={item.name} width={50} />
            <span>{item.name}</span> - <strong>{item.price} TL</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
