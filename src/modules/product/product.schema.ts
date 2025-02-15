import { model, Schema } from 'mongoose';

export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    sku: string;
}

const schema = new Schema<Product>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true, index: true },
    price: { type: Number, required: true, index: true, min: 0 },
    sku: { type: String, required: true },
}, {
    collection: 'product',
    timestamps: true,
    versionKey: false
});

export default model<Product>('product', schema);
