import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import upsellRoutes from './routes/upsellRoutes';
import transactionRoutes from './routes/transactionRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upsells', upsellRoutes);
app.use('/api/transactions', transactionRoutes);

export default app;
