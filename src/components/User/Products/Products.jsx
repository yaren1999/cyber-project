'use client';

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Ürünler yüklenemedi");
  }
  return res.json();
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Tüm Ürünler</h1>
        <div className={styles.productList}>
          {currentProducts.map((product) => (
            <div key={product._id} className={styles.card}>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.productName}
                  className={styles.productImage}
                />
              )}
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Fiyat:</strong> {product.price} ₺
              </p>
            </div>
          ))}
        </div>

        <div className={styles.paginationWrapper}>
          <ul className={styles.pagination}>
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <li key={index + 1}>
                <button
                  className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.rightSide}>
       
      </div>
    </div>
  );
};

export default Products;
