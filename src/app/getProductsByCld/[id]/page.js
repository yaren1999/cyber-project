import PwithCatId from "@/components/user/PwithCatId/PwithCatId";

export default function page({ params }) {
    const id = params.id;
    return (
        <div>

            <PwithCatId id={id} />
        </div>
    );
}
