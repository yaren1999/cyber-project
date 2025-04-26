"use client";

import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdDelete, MdUpdate } from "react-icons/md";
import { fetchCategories, handleDelete } from "@/utils/apiUtils/CategoryUtil";
const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCategories();
            setCategories(data)
            setLoading(false)
        };
        getData();


    }, []);

    const deleteCategory = async (id) => {
        const res = await handleDelete(id);
        if (res.ok) {
            
            setCategories((prev) => prev.filter((cat) => cat._id !== id));
            console.log("Kategori silindi:", id);
        } else {
            console.error("Silme başarısız");
        }

    }


    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Kategoriler</h2>
            <Link href="/admin/categories/add" className={styles.addLink}>
                Kategori Ekle
            </Link>
            <ul className={styles.list}>
                {categories.map((category) => (
                    <li key={category._id} className={styles.listItem}>
                        {category.name}
                        <div className={styles.actions}>
                            <button
                                onClick={() => deleteCategory(category._id)}
                                className={styles.iconButton}
                                title="Sil"
                            >
                                <MdDelete color="red" size={20} />
                            </button>
                            <button
                                onClick={() => router.push(`/admin/categories/update/${category._id}`)}
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
    );
};

export default CategoryList;
