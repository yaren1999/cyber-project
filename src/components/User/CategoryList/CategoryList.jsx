"use client";
import { fetchCategories } from "@/utils/apiUtils/CategoryUtil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.css"; 

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
        <div className={styles.categoryList}> 
            {categories.map((c) => {
                return (
                    <div
                        onClick={() => router.push(`/getProductsByCId/${c._id}`)}
                        key={c._id}
                        className={styles.categoryItem} 
                    >
                        {c.name}
                    </div>
                )
            })}
        </div>
    )
}

export default UserCategoryList;
