# munch_pos


point-of-sales/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── productController.ts
│   │   ├── upsellController.ts
│   │   └── transactionController.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   ├── Upsell.ts
│   │   └── Transaction.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── productRoutes.ts
│   │   ├── upsellRoutes.ts
│   │   └── transactionRoutes.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── productService.ts
│   │   ├── upsellService.ts
│   │   └── transactionService.ts
│   ├── utils/
│   │   ├── validation.ts
│   │   └── errorHandling.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── tsconfig.json
