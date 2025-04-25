import UpdateProduct from "@/components/admin/UpdateProduct/UpdateProduct";

const page = ({ params }) => {
    return (
        <div>
            <UpdateProduct id={params.id} />
        </div>
    )
}

export default page;