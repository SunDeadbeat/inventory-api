import { Request, Response } from 'express';
import { ProductService } from './product.service.class';

export class ProductController {
    static async find(req: Request, res: Response) {
        try {
            const filter = req.query.filter ? JSON.parse(req.query.filter as string) : {};
            const page = req.query.page ? parseInt(req.query.page as string) : 1;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
            const products = await ProductService.find(filter, page, limit);

            return res.status(200).json(products);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async findOne(req: Request, res: Response) {
        try {
            if (!req?.params?.id) {
                return res.status(400).json({ message: 'Invalid product id' });
            }

            const id = req.params.id;
            const product = await ProductService.findOne(id);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            return res.status(200).json(product);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<Response | undefined> {
        try {
            const product = req?.body;

            if (!product?.id || !product?.name || !product?.description || !product?.category || !product?.price || !product?.sku) {
                return res.status(400).json({ message: 'Invalid product' });
            }

            const newProduct = await ProductService.create(product);

            if (!newProduct) {
                return res.status(500).json({ message: 'Error creating product' });
            }

            return res.status(201).json(newProduct);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async update(req: Request, res: Response) {
        try {
            if (!req?.params?.id) {
                return res.status(400).json({ message: 'Invalid product id' });
            }

            const id = req.params.id;
            const product = req.body;
            const updatedProduct = await ProductService.update(id, product);

            if (!updatedProduct) {
                return res.status(500).json({ message: 'Error updating product' });
            }

            return res.status(200).json(updatedProduct);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            if (!req?.params?.id) {
                return res.status(400).json({ message: 'Invalid product id' });
            }

            const id = req.params.id;
            const deletedProduct = await ProductService.delete(id);

            if (!deletedProduct) {
                return res.status(500).json({ message: 'Error deleting product' });
            }

            return res.status(200).json(deletedProduct);
        } catch (error: any) {
            console.error(error.message);
        }
    }
}
