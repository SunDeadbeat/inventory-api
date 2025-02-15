import { Router } from 'express';
import { ProductController } from './product/product.controller.class';
import { InventoryController } from './inventory/inventory.controller.class';

const router: Router = Router();

router.get('/products', ProductController.find);
router.get('/products/:id', ProductController.findOne);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);
router.get('/stores/:storeId/inventory', InventoryController.findByStoreId);

export = router;
