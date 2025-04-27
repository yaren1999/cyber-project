"use client"

import { getProductsForcategoryId } from "@/utils/apiUtils/ProductUtil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PwithCatId = ({ id }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {

        const getData = async () => {
            const data = await getProductsForcategoryId(id);
            setProducts(data);
            setLoading(false)
        }
        getData();
    }, [])

    if (loading) {
        return <p>Loading..</p>
    }
    return (
        <div>
            {products.map((p) => {
                return (
                    <div onClick={() => router.push(`/products/${p._id}`)} key={p._id}>{p.name}</div>
                )
            })}

        </div>
    )
}

export default PwithCatId;