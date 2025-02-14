import productSchema, { Product } from './product.schema';

export class ProductService {
    static async find(filter: any = {}, page: number = 1, limit: number = 10) {
        try {
            const skip = (page - 1) * limit;

            return await Promise.resolve(productSchema.find(filter).skip(skip).limit(limit));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async findOne(id: string) {
        try {
            return await Promise.resolve(productSchema.findOne({ id }));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async create(product: Product) {
        try {
            return await Promise.resolve(productSchema.create(product));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async update(id: string, product: Product) {
        try {
            return await Promise.resolve(productSchema.findOneAndUpdate({ id }, product, { new: true }));
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async delete(id: string) {
        try {
            return await Promise.resolve(productSchema.findOneAndDelete({ id }));
        } catch (error: any) {
            console.error(error.message);
        }
    }
}
