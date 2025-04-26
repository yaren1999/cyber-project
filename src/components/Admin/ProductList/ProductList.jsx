"use client"
import { deleteProduct, fetchProducts } from "@/utils/apiUtils/ProductUtil";
import { useEffect, useState } from "react";
import { MdDelete, MdUpdate } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

    const handleDelete = async (id) => {
        const res = await deleteProduct(id)
        if (res.ok) {
            setProducts((prev) => prev.filter((p) => p._id !== id));
            console.log("Ürün silindi silindi:", id);
        } else {
            console.error("Silme başarısız");
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div>
                <Link href="/admin"> anasayfaya dön</Link>
                <h2>Ürünler</h2>
                <Link href="/admin/products/add">Ürün Ekle</Link>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>{product.name}
                            <button
                                onClick={() => handleDelete(product._id)} style={{ marginLeft: 10 }}>


                                <MdDelete color="red" />
                            </button>
                            <button
                                onClick={() => router.push(`/admin/products/update/${product._id}`)}

                                style={{ marginLeft: 10 }}
                            >
                                <MdUpdate color="blue" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductList;