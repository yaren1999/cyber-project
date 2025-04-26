"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchOneCategory, updateCategory } from "@/utils/apiUtils/CategoryUtil";

const UpdateCategory = ({ id }) => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        const fetchCategory = async () => {

            const data = await fetchOneCategory(id);
            setName(data.name)
            setLoading(false)
        };

        if (id) fetchCategory();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const res = await updateCategory(id, name);
        if (res.ok) {
            alert("katerogi güncellendi");
            router.push("/admin/categories")
        }
        else {
            alert("kategori güncellenemedi")
        }

    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div>
            <h2>Kategoriyi Güncelle</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Kategori adı"
                />
                <button type="submit">Güncelle</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
