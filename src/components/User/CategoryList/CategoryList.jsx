"use client"

import { fetchCategories } from "@/utils/apiUtils/CategoryUtil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserCategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCategories();
            setCategories(data);
            setLoading(false)
        }

        getData();
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            {categories.map((c) => {
                return (
                    <div onClick={() => router.push(`/getProductsByCId/${c._id}`)} key={c._id}>{c.name}</div>
                )
            })}
        </div>
    )
}

export default UserCategoryList;