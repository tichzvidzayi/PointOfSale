# Point of Sale Application

## Overview
The Point of Sales (POS) application is designed to handle key aspects such as user authentication, product management, upsell product management, and sales transactions. 
## Features

1. ### User Authentication
    - Sign up with a unique email and password.
    - Securely hash and store passwords.
    - Log in with email and password.
    - Token-based authentication for securing API endpoints.

2. ### Product Management
    - Create a new product with name, price, description, and quantity attributes.
    - Retrieve a list of all products.
    - Update the details of an existing product.
    - Delete a product from the system.

3. ### Upsell Product Management
    - Link a product to another as an upsell product.
    - Retrieve upsell products linked to a specific product.
    - Remove a product from being an upsell product of another.

4. ### Sales and Transactions
    - Create a new sale transaction with details of products sold, quantities, and total amount.
    - Allow specification of any upsell products linked to sold products.
    - Retrieve details of a specific transaction.

## Project Structure
```bash
point-of-sales/
├── src/
│ ├── config/
│ │ └── database.ts
│ ├── controllers/
│ │ ├── authController.ts
│ │ ├── productController.ts
│ │ ├── upsellController.ts
│ │ └── transactionController.ts
│ ├── models/
│ │ ├── User.ts
│ │ ├── Product.ts
│ │ ├── Upsell.ts
│ │ └── Transaction.ts
│ ├── routes/
│ │ ├── authRoutes.ts
│ │ ├── productRoutes.ts
│ │ ├── upsellRoutes.ts
│ │ └── transactionRoutes.ts
│ ├── services/
│ │ ├── authService.ts
│ │ ├── productService.ts
│ │ ├── upsellService.ts
│ │ └── transactionService.ts
│ ├── utils/
│ │ ├── validation.ts
│ │ └── errorHandling.ts
│ ├── app.ts
│ └── server.ts
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
├── package.json
└── tsconfig.json

```
### Prerequisites

- Node.js 20+
### Installation

1. Clone the repository:
    ```sh
    https://github.com/tichzvidzayi/munchie_point_of_sale.git
    cd point-of-sales
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
      ```
      PORT=3000
      DATABASE_URL=mysql://user:password@localhost:3306/point_of_sales
      JWT_SECRET=your_jwt_secret
      ```

### Running the Application

1. Compile TypeScript code:
    ```sh
    npm run build
    ```

2. Start the application:
    ```sh
    npm start
    ```

3. Alternatively, for development mode with auto-reloading:
    ```sh
    npm run dev
    ```

### Running Tests

1. To run tests:
    ```sh
    npm test
    ```

### Docker Setup

1. Build the Docker image:
    ```sh
    docker build -t point-of-sales .
    ```

2. Run the Docker container:
    ```sh
    docker-compose up
    ```

### API Endpoints

#### Authentication

- `POST /api/auth/signup`: Sign up a new user.
- `POST /api/auth/login`: Log in an existing user.

#### Products

- `POST /api/products`: Create a new product.
- `GET /api/products`: Retrieve all products.
- `PUT /api/products/:id`: Update a product.
- `DELETE /api/products/:id`: Delete a product.

#### Upsell Products

- `POST /api/upsells`: Link a product to another as an upsell product.
- `GET /api/upsells/:productId`: Retrieve upsell products linked to a specific product.
- `DELETE /api/upsells/:id`: Remove a product from being an upsell product of another.

#### Transactions

- `POST /api/transactions`: Create a new sale transaction.
- `GET /api/transactions/:id`: Retrieve details of a specific transaction.

### Development Notes

- Follow the project structure for organized code.
- Ensure all API endpoints are secured with token-based authentication.
- Use environment variables for sensitive data.
- Write unit tests for critical functionalities.
- Use Docker for easy deployment and scaling.

### Contributions

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or suggestions, please contact [your email].



