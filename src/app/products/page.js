'use client'; // Bileşenin istemci tarafında çalıştığını belirtir

import React, { useState, useEffect } from "react";

// Ürünleri almak için API çağrısı
async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Ürünler yüklenemedi");
  }
  return res.json();
}

const ProductsPage = () => {
  // State'ler
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 6; // Her sayfada gösterilecek ürün sayısı

  useEffect(() => {
    // Veri çekme işlemi
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data); // Veriyi state'e al
        setLoading(false);  // Yükleme işlemi tamamlandı
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Mevcut sayfaya göre gösterilecek ürünleri al
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Sayfa numarasına tıklandığında yeni sayfaya geçiş
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "flex-start", margin: "0 20px" }}>
      {/* Sağ container: Ürünler */}
      <div style={{ width: "50%", padding: "20px" }}>
        <h1>Tüm Ürünler</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {currentProducts.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid black",
                padding: "10px",
                width: "calc(33.33% - 20px)", // Üçlü grup için
                boxSizing: "border-box",
                marginBottom: "20px",
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.productName}
                  width="100%"
                  height="150"
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

        {/* Sayfalama */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <ul style={{ display: "flex", listStyleType: "none", gap: "10px", justifyContent: "center" }}>
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <li key={index + 1}>
                <button
                  style={{
                    padding: "5px 10px",
                    backgroundColor: currentPage === index + 1 ? "#007bff" : "#f1f1f1",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sol tarafta başka bir container eklemek istersen burayı kullanabilirsin */}
      <div style={{ width: "50%", padding: "20px" }}>
        {/* Sol taraf için içerik buraya gelecek */}
      </div>
    </div>
  );
};

export default ProductsPage;
