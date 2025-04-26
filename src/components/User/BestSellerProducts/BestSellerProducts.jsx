"use client";

import { getBestSellerProduct } from "@/utils/apiUtils/ProductUtil";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

const BestSellerProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await getBestSellerProduct();
            setProducts(data);
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    return (
        <div className={styles.productContainer}>
            {products.map((product) => {
                return (
                    <div onClick={() => router.push(`/products/${product._id}`)} className={styles.productCard} key={product._id}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                        />
                        <div className={styles.productDetails}>
                            <div className={styles.productName}>{product.name}</div>
                            <div className={styles.productPrice}>
                                ${product.price.toFixed(2)}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BestSellerProducts;
