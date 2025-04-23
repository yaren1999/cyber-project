import connect from "@/utils/dbConnect"
import { NextResponse } from "next/server";
import Category from "../../../models/CategorySchema"

export const GET = async (request) => {
    await connect();

    try {
        const categories = await Category.find();
        return new NextResponse(JSON.stringify(categories), { status: 200 })
    } catch (error) {
        return new NextResponse("kategoriler bulunamadi", { status: 500 })
    }
}

export const POST = async (request) => {
    await connect();
    try {
        const body = await request.json();
        const category = await Category.create(body);

        return new NextResponse("Category Eklendi", { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Kategori ekleme hatası" }, { status: 500 });


    }

}
