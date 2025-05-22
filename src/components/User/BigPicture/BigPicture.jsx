"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

const BigPicture = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchRandomProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setProduct(data[randomIndex]);
        }
      } catch (err) {
        console.error("Ürün çekme hatası:", err);
      }
    };

    fetchRandomProduct();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Pro Beyond</p>
        <h1>Iphone 14 Pro</h1>
        <p>Create change everything for the better.</p>

        {product && (
          <Link href={`/products/${product._id}`} className={styles.shopButton}>
            Buy Now
          </Link>
        )}
      </div>

      <Image className={styles.img} src="/bigImage.png" width={250} height={400} alt="img" />
    </div>
  );
};

export default BigPicture;
