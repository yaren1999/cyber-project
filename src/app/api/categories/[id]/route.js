/*
1-getAll 
2-get * 
3-add 
4-update *
5-delete *

*/

import connect from "@/utils/dbConnect"
import Category from "../../../../models/CategorySchema"
import { NextResponse } from "next/server";
import Product from "@/models/ProductSchema";



export const GET = async (request, { params }) => {
    await connect();

    const { id } = params;

    try {
        const category = await Category.findById(id);
        return new NextResponse(JSON.stringify(category), { status: 200 })

    } catch (error) {
        return new NextResponse("Kategori getirme hatası oluştu", { status: 500 })
    }

}

export const DELETE = async (request, { params }) => {

    await connect();
    const { id } = params;

    try {
        const category = await Category.findByIdAndDelete(id);
        const products = await Product.deleteMany({ categoryId: id });
        return new NextResponse("Kategori silindi", { status: 200 })

    } catch (error) {
        return new NextResponse("Kategori silinemedi", { status: 500 })

    }
}

export const PUT = async (request, { params }) => {
    const { id } = params;
    await connect();
    const body = await request.json();

    try {
        const category = await Category.updateOne({ _id: id }, body);
        return new NextResponse("Kategori güncellendi", { status: 200 })
    } catch (error) {
        return new NextResponse("Kategori güncellenemedi", { status: 500 })

    }
}

