export const fetchCategories = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/categories");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Kategori fetch hatası:", error);
        return "hata"
    }
};

export const fetchOneCategory = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/categories/${id}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Kategori alınamadı:", err);
    }
};

export const handleDelete = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/categories/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error("Silme hatası:", error);
    }
};

export const addCategory = async ({ name }) => {
    try {
        const res = await fetch("http://localhost:3000/api/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });

        return res;
    } catch (error) {
        console.error("İstek hatası:", error);
        return { ok: false, message: "Sunucu hatası" };
    }
};


export const updateCategory = async (id, name) => {
    try {
        const res = await fetch(`http://localhost:3000/api/categories/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, name }),
        });

        return res;
    } catch (error) {
        console.error("Güncelleme hatası:", error);
    }
}
