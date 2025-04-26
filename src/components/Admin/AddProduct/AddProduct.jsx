"use client"
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { addProduct } from "@/utils/apiUtils/ProductUtil"; 
import { fetchCategories } from "@/utils/apiUtils/CategoryUtil";
import Link from "next/link";
const AddProduct = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        name: "",
        categoryId: "",
        price: "",
        image: "",
        description: "",
        stockAmount: ""
    });

    const [message, setMessage] = useState("");


    useEffect(() => {
        const getData = async () => {
            const data = await fetchCategories();
            setCategories(data)
            setLoading(false)


        };
        getData();


    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await addProduct({
            ...form,
            price: parseFloat(form.price),
            stockAmount: parseInt(form.stockAmount),
        });

        if (res.ok) {
            setMessage("Ürün başarıyla eklendi.");
            setForm({
                name: "",
                categoryId: "",
                price: "",
                image: "",
                description: "",
                stockAmount: ""
            });
        } else {
            setMessage("Ürün eklenirken bir hata oluştu.");
        }
    };

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className={styles.container}>
            <Link href="/admin/products" className={styles.backLink}>Ürünlere dön</Link>
            <h2 className={styles.title}>Ürün Ekle</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ürün Adı"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <select
                    name="categoryId"
                    value={form.categoryId}
                    onChange={handleChange}
                    required
                    className={styles.select}
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
                    required
                    className={styles.input}
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
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Ekle</button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default AddProduct;
