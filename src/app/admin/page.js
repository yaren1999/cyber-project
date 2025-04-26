const { default: Link } = require("next/link")


const page = () => {
    return (
        <div>
            <Link href="/admin/categories">Kategoriler</Link>
            <Link href="/admin/products">Ürünler</Link>
        </div>
    )
}

export default page;