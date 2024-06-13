import express from 'express';
import { createProduct, getAllProducts, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
