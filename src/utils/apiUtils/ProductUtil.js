export const fetchProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Product fetch hatası:", error);
        return "hata"
    }
};
export const fetchOneProduct = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Kategori alınamadı:", err);
    }
};

export const addProduct = async ({ name, categoryId, price, image, description, stockAmount }) => {
    try {
        const res = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, categoryId, price, image, description, stockAmount }),
        });

        return res;
    } catch (error) {
        console.error("İstek hatası:", error);
        return { ok: false, message: "Sunucu hatası" };
    }
};

export const deleteProduct = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error("Silme hatası:", error);
    }
};

export const handleUpdateProduct = async (_id, name, categoryId, price, image, description, stockAmount) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id, name, categoryId, price, image, description, stockAmount }),
        });

        return res;
    } catch (error) {
        console.error("Güncelleme hatası:", error);
    }
}

export const getBestSellerProduct = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/bestSellerProducts");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Product fetch hatası:", error);
        return "hata"
    }
}

