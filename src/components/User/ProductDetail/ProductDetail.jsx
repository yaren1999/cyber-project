"use client"

import { fetchOneProduct } from "@/utils/apiUtils/ProductUtil";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    useEffect(() => {
        const getData = async () => {
            const data = await fetchOneProduct(id);
            setProduct(data);
            setLoading(false)
        }
        getData()
    }, [])

    if (loading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <button onClick={() => router.back()}>Back</button>
            <br />
            <Image src={product.image} width={200} height={200} alt="edn" />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <p>{product.stockAmount} adet</p>



        </div>
    )
}

export default ProductDetail;