"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchOneCategory, updateCategory } from "@/utils/apiUtils/CategoryUtil";
import styles from "./style.module.css";

const UpdateCategory = ({ id }) => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            const data = await fetchOneCategory(id);
            setName(data.name);
            setLoading(false);
        };

        if (id) fetchCategory();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const res = await updateCategory(id, name);
        if (res.ok) {
            alert("Kategori güncellendi");
            router.push("/admin/categories");
        } else {
            alert("Kategori güncellenemedi");
        }
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Kategoriyi Güncelle</h2>
            <form onSubmit={handleUpdate} className={styles.form}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kategori adı"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Güncelle
                </button>
            </form>
        </div>
    );
};

export default UpdateCategory;
