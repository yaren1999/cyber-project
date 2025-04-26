"use client"
import styles from "./style.module.css";
import { deleteProduct, fetchProducts } from "@/utils/apiUtils/ProductUtil";
import { useEffect, useState } from "react";
import { MdDelete, MdUpdate } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        }
        getData();

    }, [])

    const handleDelete = async (id) => {
        const res = await deleteProduct(id)
        if (res.ok) {
            setProducts((prev) => prev.filter((p) => p._id !== id));
            console.log("Ürün silindi silindi:", id);
        } else {
            console.error("Silme başarısız");
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link href="/admin" className={styles.link}>Anasayfaya Dön</Link>
                <Link href="/admin/products/add" className={styles.link}>Ürün Ekle</Link>
            </div>

            <h2 className={styles.title}>Ürünler</h2>

            <ul className={styles.list}>
                {products.map((product) => (
                    <li key={product._id} className={styles.listItem}>
                        {product.name}
                        <div className={styles.actions}>
                            <button
                                onClick={() => handleDelete(product._id)}
                                className={styles.iconButton}
                                title="Sil"
                            >
                                <MdDelete color="red" size={20} />
                            </button>
                            <button
                                onClick={() => router.push(`/admin/products/update/${product._id}`)}
                                className={styles.iconButton}
                                title="Güncelle"
                            >
                                <MdUpdate color="blue" size={20} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;