"use client";
import { fetchOneProduct, handleUpdateProduct } from "@/utils/apiUtils/ProductUtil";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/utils/apiUtils/CategoryUtil";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";

const UpdateProduct = ({ id }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        _id: "",
        name: "",
        categoryId: "",
        price: "",
        image: "",
        description: "",
        stockAmount: ""
    });

    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        getData();
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await fetchOneProduct(id);
            setForm({
                _id: data._id || "",
                name: data.name || "",
                categoryId: data.categoryId || "",
                price: data.price || "",
                image: data.image || "",
                description: data.description || "",
                stockAmount: data.stockAmount || ""
            });
            setLoading(false);
        };

        if (id) fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await handleUpdateProduct(
            form._id,
            form.name,
            form.categoryId,
            form.price,
            form.image,
            form.description,
            form.stockAmount
        );

        if (res.ok) {
            alert("Ürün güncellendi.");
            router.push("/admin/products");
        } else {
            alert("Ürün güncellenemedi.");
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <Link href="/admin/products" className={styles.backLink}>
                Ürünlere dön
            </Link>
            <h2 className={styles.title}>Ürün Güncelle</h2>
            {form.image && (
                <Image
                    src={form.image}
                    width={120}
                    height={120}
                    alt="Ürün görseli"
                    className={styles.imagePreview}
                />
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ürün Adı"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <select
                    name="categoryId"
                    value={form.categoryId}
                    onChange={handleChange}
                    className={styles.select}
                    required
                >
                    <option value="">Kategori Seçin</option>
                    {categories.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    name="price"
                    placeholder="Fiyat"
                    value={form.price}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Resim URL"
                    value={form.image}
                    onChange={handleChange}
                    className={styles.input}
                />
                <textarea
                    name="description"
                    placeholder="Açıklama"
                    value={form.description}
                    onChange={handleChange}
                    className={styles.textarea}
                />
                <input
                    type="number"
                    name="stockAmount"
                    placeholder="Stok Miktarı"
                    value={form.stockAmount}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>
                    Güncelle
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
