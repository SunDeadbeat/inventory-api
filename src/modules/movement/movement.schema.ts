import { model, Schema } from 'mongoose';
import { MovementType } from '../../enums/movement.enum';

export interface Movement {
    id: string;
    productId: string;
    sourceStoreId: string;
    targetStoreId: string;
    quantity: number;
    timestamp: Date;
    type: MovementType;
}

const schema = new Schema<Movement>({
    id: { type: String, required: true, unique: true },
    productId: { type: String, required: true, ref: 'product' },
    sourceStoreId: { type: String, required: true, ref: 'inventory' },
    targetStoreId: { type: String, required: true, ref: 'inventory' },
    quantity: { type: Number, required: true, min: 0 },
    timestamp: { type: Date, required: true },
    type: { type: String, required: true, enum: Object.values(MovementType) },
}, {
    collection: 'movement',
    timestamps: true,
    versionKey: false
});

export default model<Movement>('movement', schema);
