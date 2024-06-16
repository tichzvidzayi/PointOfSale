import { createProduct, getAllProducts, updateProduct, deleteProduct } from './productController';
import Product from '../models/Product';
import { Request, Response } from 'express';

jest.mock('../models/Product');

describe('Product Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new product', async () => {
        const req = {
            body: {
                name: 'Product 1',
                price: 100.0,
                description: 'A sample product',
                quantity: 10
            }
        } as unknown as Request;

        const res = {
            json: jest.fn()
        } as unknown as Response;

        (Product.create as jest.Mock).mockResolvedValue(req);

        await createProduct(req, res);

        expect(Product.create).toHaveBeenCalledWith(req);
        expect(res.json).toHaveBeenCalledWith(req);
    });

    it('should retrieve all products', async () => {
        const res = {
            json: jest.fn()
        } as unknown as Response;

        const products = [
            { id: 1, name: 'Product 1', price: 100.0, description: 'A sample product', quantity: 10 },
            { id: 2, name: 'Product 2', price: 200.0, description: 'Another product', quantity: 20 }
        ];

        (Product.findAll as jest.Mock).mockResolvedValue(products);

        await getAllProducts( res);

        expect(Product.findAll).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith(products);
    });

    it('should update a product', async () => {
        const req = {
            params: { id: '1' },
            body: { price: 150.0 }
        } as unknown as Request;

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        } as unknown as Response;

        const product = {
            id: 1,
            name: 'Product 1',
            price: 100.0,
            description: 'A sample product',
            quantity: 10,
            update: jest.fn().mockResolvedValue(true)
        };

        (Product.findByPk as jest.Mock).mockResolvedValue(product);

        await updateProduct(req, res);

        expect(Product.findByPk).toHaveBeenCalledWith('1');
        expect(product.update).toHaveBeenCalledWith(req);
        expect(res.json).toHaveBeenCalledWith(product);
    });

    it('should delete a product', async () => {
        const req = {
            params: {id: '1'}
        } as unknown as Request;

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        } as unknown as Response;

        const product = {
            id: 1,
            name: 'Product 1',
            price: 100.0,
            description: 'A sample product',
            quantity: 10,
            destroy: jest.fn().mockResolvedValue(true)
        };

        (Product.findByPk as jest.Mock).mockResolvedValue(product);

        await deleteProduct(req, res);

        expect(Product.findByPk).toHaveBeenCalledWith('1');
        expect(product.destroy).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({ message: 'Product deleted' });
    });
});
