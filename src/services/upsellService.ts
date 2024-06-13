import  Upsell  from '../models/Upsell';

export default class UpsellService {
    static async linkUpsell(productId: number, upsellId: number): Promise<void> {
        await Upsell.create({id: 0, productId, upsellId });
    }

    static async getUpsells(productId: number): Promise<Upsell[]> {
        return await Upsell.findAll({ where: { productId } });
    }

    static async unlinkUpsell(productId: number, upsellId: number): Promise<void> {
        await Upsell.destroy({ where: { productId, upsellId } });
    }
}
