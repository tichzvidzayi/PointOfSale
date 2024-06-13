import { Request, Response } from 'express';
import ProductService from '../services/productService';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.get("name");
        const price = req.get("price");
        const description = req.get("description");
        const quantity = req.get("quantity");
        await ProductService.createProduct(name, Number(price), description, Number(quantity));
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product' });
    }
};

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.id);
        const updatedFields = req.params;
        await ProductService.updateProduct(productId, updatedFields);
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product' });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.id);
        await ProductService.deleteProduct(productId);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product' });
    }
};
