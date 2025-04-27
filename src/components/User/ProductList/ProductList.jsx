"use client"

import { useEffect, useState } from "react";
import { MdDelete, MdUpdate } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { fetchProducts } from "@/utils/apiUtils/ProductUtil";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        }
        getData();

    }, [])


    if (loading) {
        return <p>Loading...</p>
    }
  
    return (

        <div>


            <ul >
                {products.map((product) => (
                    <li onClick={() => router.push(`/products/${product._id}`)} key={product._id}>{product.name}
                        <Image src={product.image} width={100} height={100} />

                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ProductList;