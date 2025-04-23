import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categoryId: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    stockAmount: { type: Number, required: true },



});


export default mongoose.models.Product || mongoose.model("Product", ProductSchema);