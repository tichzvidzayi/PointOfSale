import { Request, Response } from 'express';
import UpsellService from '../services/upsellService';

export const linkUpsell = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.productId);
        const upsellId = parseInt(req.params.upsellId);
        await UpsellService.linkUpsell(productId, upsellId);
        res.status(201).json({ message: 'Upsell linked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to link upsell' });
    }
};

export const getUpsells = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.productId);
        const upsells = await UpsellService.getUpsells(productId);
        res.status(200).json(upsells);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get upsells' });
    }
};

export const unlinkUpsell = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = parseInt(req.params.productId);
        const upsellId = parseInt(req.params.upsellId);
        await UpsellService.unlinkUpsell(productId, upsellId);
        res.status(200).json({ message: 'Upsell unlinked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to unlink upsell' });
    }
};
