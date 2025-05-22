"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const GetProductsByCategoryPage = () => {
  const params = useParams();
  const categoryId = params.categoryId;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const res = await fetch(`/api/products?categoryId=${categoryId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Ürünler yüklenemedi");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  if (loading) return <p>Yükleniyor...</p>;
  if (products.length === 0) return <p>Bu kategoride ürün bulunamadı.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ürünler - Kategori: {categoryId}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "calc(33.33% - 20px)",
              boxSizing: "border-box",
            }}
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.productName}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
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
    </div>
  );
};

export default GetProductsByCategoryPage;
