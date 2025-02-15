import { Request, Response } from 'express';
import { InventoryService } from './inventory.service.class';

export class InventoryController {
    static async findByStoreId(req: Request, res: Response) {
        try {
            const storeId = req?.params?.storeId;
            const page = req.query.page ? parseInt(req.query.page as string) : 1;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
            const inventory = await InventoryService.findByStoreId(storeId, page, limit);

            return res.status(200).json(inventory);
        } catch (error: any) {
            console.error(error.message);
        }
    }
}
