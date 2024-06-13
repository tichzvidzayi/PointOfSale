import express from 'express';
import { linkUpsell, getUpsells, unlinkUpsell } from '../controllers/upsellController';

const router = express.Router();

router.post('/:productId/:upsellId', linkUpsell);
router.get('/:productId', getUpsells);
router.delete('/:productId/:upsellId', unlinkUpsell);

export default router;
