import  Product  from '../models/Product';

export default class ProductService {
    static async createProduct(name: string, price: number, description: string, quantity: number): Promise<void> {
        await Product.create({id: 0, name, price, description, quantity });
    }

    static async getAllProducts(): Promise<Product[]> {
        return await Product.findAll();
    }

    static async updateProduct(productId: number, updatedFields: Partial<Product>): Promise<void> {
        await Product.update(updatedFields, { where: { id: productId } });
    }

    static async deleteProduct(productId: number): Promise<void> {
        await Product.destroy({ where: { id: productId } });
    }
}
