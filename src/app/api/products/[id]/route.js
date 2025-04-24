import Product from "@/models/ProductSchema";
import connect from "@/utils/dbConnect"
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = params;
    await connect();


    try {
        const product = await Product.findById(id);
        return new NextResponse(JSON.stringify(product), { status: 200 })
    } catch (error) {
        return new NextResponse("ürün bulunamadı", { status: 500 })

    }
}


export const PUT = async (request, { params }) => {
    const { id } = params;
    await connect();
    const body = await request.json();


    try {

        const product = await Product.updateOne({ _id: id }, body);

        return new NextResponse("ürün güncellendi", { status: 200 })
    } catch (error) {
        return new NextResponse("ürün güncellenemedi!!!", { status: 200 })
    }
}


export const DELETE = async (request, { params }) => {
    const { id } = params;
    await connect();

    try {
        const product = await Product.findByIdAndDelete(id);
        return new NextResponse("ürün silindi", { status: 200 })
    } catch (error) {
        return new NextResponse("ürün silinemedi", { status: 500 })
    }

}