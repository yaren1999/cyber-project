"use client";

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
        <div>
            <h2>Kategoriler</h2>
            <Link href="/admin/categories/add">Kategori Ekle</Link>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>{category.name}
                        <button 
                        onClick={() => deleteCategory(category._id)} style={{ marginLeft: 10 }}>
                            <MdDelete color="red" />
                        </button>
                        <button
                            onClick={() => router.push(`/admin/categories/update/${category._id}`)}
                            style={{ marginLeft: 10 }}
                        >
                            <MdUpdate color="blue" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
