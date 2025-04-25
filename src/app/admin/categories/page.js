import CategoryList from "@/components/admin/CategoryList/CategoryList";
const { default: Link } = require("next/link")
const page = () => {

    return (
        <div>
            <Link href="/admin">Anasayfaya Dön</Link>
            <CategoryList />
        </div>
    )
}

export default page;