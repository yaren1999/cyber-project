// app/products/[id]/page.js

import { notFound } from "next/navigation";

const getProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
};

const ProductDetailPage = async ({ params }) => {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.productName}</h1>
      <img src={product.image} alt={product.productName} width={300} />
      <p>{product.description}</p>
      <p><strong>{product.price} ₺</strong></p>
    </div>
  );
};

export default ProductDetailPage;
