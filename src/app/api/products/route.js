
import Product from "@/models/ProductSchema";
import connect from "@/utils/dbConnect"
import { NextResponse } from "next/server";


export const GET = async (request) => {
  await connect();

  const url = new URL(request.url);
  const categoryId = url.searchParams.get("categoryId");

  let products;
  if (categoryId) {
    products = await Product.find({ category: categoryId });
  } else {
    products = await Product.find({});
  }

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST = async (request) => {
    await connect();

    try {
        const body = await request.json();
        const product = await Product.create(body);
        return new NextResponse("ürün eklendi", { status: 200 })
    } catch (error) {
        return new NextResponse("ürün ekleme hatası", { status: 500 })

    }
}
