"use client"
import { fetchOneProduct, handleUpdateProduct, updateProduct } from "@/utils/apiUtils/ProductUtil";
import { useEffect, useState } from "react";
import { fetchCategories } from "@/utils/apiUtils/CategoryUtil";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const UpdateProduct = ({ id }) => {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    const router = useRouter();
    const [form, setForm] = useState({
        _id: "",
        name: "",
        categoryId: "",
        price: "",
        image: "",
        description: "",
        stockAmount: ""
    });
    useEffect(() => {
        const getData = async () => {
            const data = await fetchCategories();
            setCategories(data)
            setLoading(false)


        };
        getData();


    }, []);

    useEffect(() => {
        const fetchProduct = async () => {

            const data = await fetchOneProduct(id);
            setProduct(data)
            setLoading(false)
            setForm({
                _id: data._id || "",
                name: data.name || "",
                categoryId: data.categoryId || "",
                price: data.price || "",
                image: data.image || "",
                description: data.description || "",
                stockAmount: data.stockAmount || ""
            });
        };

        if (id) fetchProduct();
    }, [id]);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await handleUpdateProduct(form._id, form.name, form.categoryId, form.price, form.image, form.description, form.stockAmount);
        if (res.ok) {
            alert("ürün güncellendi.")
            router.push("/admin/products")

        }
        else {
            alert("ürün güncellenemedi")
        }

    }
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <Link href="/admin/products">Ürünlere dön</Link>
            <h2>Ürün Güncelle</h2>
            <Image src={form.image} width={100} height={100} alt="kwesdb" />
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ürün Adı"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <select name="categoryId" value={form.categoryId} onChange={handleChange} required>
                    <option value="">Kategori Seçin</option>
                    {categories.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.name}
                        </option>
                    ))}

                </select>

                <input
                    type="number"
                    name="price"
                    placeholder="Fiyat"
                    value={form.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Resim URL"
                    value={form.image}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Açıklama"
                    value={form.description}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="stockAmount"
                    placeholder="Stok Miktarı"
                    value={form.stockAmount}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Güncelle</button>
            </form>
        </div>
    )
}

export default UpdateProduct;