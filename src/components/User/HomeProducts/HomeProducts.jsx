"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/utils/apiUtils/ProductUtil";
import styles from './style.module.css'; 


const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts();
      if (Array.isArray(data)) {
        setProducts(data.slice(0, 10)); 
      }
    };

    getData();
  }, []);

    const handleAddToCart = (product) => {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      const newCartItem = {
        ...product,
        cartItemId: `${product._id}-${Date.now()}` 
      };

      const updatedCart = [...existingCart, newCartItem];

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      alert(`${product.name} sepete eklendi! ❤️`);
    };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Vitrin Ürünleri</h2>
        {products.length === 0 ? (
          <p>Ürün bulunamadı...</p>
        ) : (
          <div className={styles.products}>
            {products.map((product) => (
              <div key={product._id} className={styles.card}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>{product.price} TL</p>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCart(product)}
                >
                  Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
