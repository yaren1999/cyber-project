import Product from "@/models/ProductSchema";
import connect from "@/utils/dbConnect"

export const GET = async (request) => {

    await connect();
    try {
        const products = await Product.aggregate([{ $sample: { size: 5 } }]);
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response("Error fetching products", { status: 500 });
    }
}