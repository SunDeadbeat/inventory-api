import inventorySchema from './inventory.schema';

export class InventoryService {
    static async findByStoreId(storeId: string, page: number, limit: number) {
        try {
            return await Promise.resolve(inventorySchema.find({ storeId }).skip((page - 1) * limit).limit(limit));
        } catch (error: any) {
            console.error(error.message);
        }
    }
}
