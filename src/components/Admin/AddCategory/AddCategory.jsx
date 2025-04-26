"use client"

import styles from './style.module.css';
import { addCategory } from "@/utils/apiUtils/CategoryUtil";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddCategory = () => {
    const [name, setName] = useState("")
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await addCategory({ name });

        if (res.ok) {
            alert("Kategori eklendi");
            router.push("/admin/categories");
        } else {
            let errorMessage = "Bir hata oluştu";
            try {
                const errorData = await res.json();
                errorMessage = errorData.message || errorMessage;
            } catch (err) {
                const fallbackText = await res.text();
                errorMessage = fallbackText;
            }

            console.log("Hata mesajı:", errorMessage);
            alert(errorMessage);
        }
    };



    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Kategori Ekle</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kategori adı"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Ekle</button>
            </form>
        </div>
    )
}

export default AddCategory;