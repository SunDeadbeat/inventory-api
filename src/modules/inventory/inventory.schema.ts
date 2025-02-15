import { model, Schema } from 'mongoose';

export interface Inventory {
    id: string;
    productId: string;
    storeId: string;
    quantity: number;
    minStock: number;
}

const schema = new Schema<Inventory>({
    id: { type: String, required: true, unique: true },
    productId: { type: String, required: true, ref: 'product' },
    storeId: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    minStock: { type: Number, required: true, min: 0 },
}, {
    collection: 'inventory',
    timestamps: true,
    versionKey: false
});

export default model<Inventory>('inventory', schema);
