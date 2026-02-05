# Money Manager - Complete Full Stack Application

A comprehensive financial management web application built with **React**, **Tailwind CSS**, **Java Spring Boot**, and **MongoDB Atlas**.

## 📋 Project Overview

Money Manager is a full-featured web application that allows users to:

- Track income and expenses with detailed categorization
- Manage multiple bank accounts
- Transfer funds between accounts
- View financial analytics and reports
- Filter transactions by category, division, and date range
- Edit transactions within 12 hours of creation
- Generate spending summaries

## 📁 Project Structure

```
Money Manager Frontend/
├── frontend/                 # React Frontend Application
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
├── backend/                  # Spring Boot Backend API
│   ├── src/
│   ├── pom.xml
│   ├── README.md
│   └── .gitignore
└── README.md                 # This file
```

## 🛠 Tech Stack

### Frontend
- **React** 18.2.0
- **Tailwind CSS** 3.3.6
- **React Router** v6.20.0
- **Axios** 1.6.0
- **Recharts** 2.10.0
- **Zustand** 4.4.0
- **React Icons** 4.12.0

### Backend
- **Java** 17
- **Spring Boot** 3.2.0
- **Spring Data MongoDB**
- **Spring Security**
- **MongoDB Atlas**
- **Maven** 3.9+

## 🚀 Quick Start

### Frontend Setup

```bash
# Navigate to frontend directory
cd "Money Manager Frontend/frontend"

# Install dependencies
npm install

# Start development server
npm start
```

Frontend will be available at: `http://localhost:3000`

### Backend Setup

```bash
# Navigate to backend directory
cd "Money Manager Frontend/backend"

# Build with Maven
mvn clean install

# Run application
mvn spring-boot:run
```

Backend API will be available at: `http://localhost:8080/api`

## 🔐 Configuration

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:8080/api
```

### Backend (application-dev.yml)
```yaml
spring:
  data:
    mongodb:
      uri: mongodb+srv://username:password@cluster.mongodb.net/money-manager
```

## 📚 Key Features

### 1. Dashboard
- **Monthly View**: Income and expense trends
- **Weekly View**: Daily breakdown of transactions
- **Yearly View**: Annual financial overview
- **Charts**: Visual representation of financial data
- **Category Summary**: Breakdown by transaction category

### 2. Transaction Management
- Add income and expense transactions
- Categorize with predefined categories:
  - Food, Fuel, Movie, Medical, Loan, Salary, Freelance, Investment, Gift, Bonus
- Divide into Office or Personal categories
- Date and time tracking
- 12-hour edit window
- Soft delete functionality

### 3. Account Management
- Create multiple accounts (Checking, Savings, etc.)
- Track account balances
- View total balance across accounts
- Deactivate accounts
- Account transaction history

### 4. Fund Transfers
- Transfer between user accounts
- Automatic balance updates
- Transfer history tracking
- Date range filtering

### 5. Filtering & Reporting
- Filter by transaction type (Income/Expense)
- Filter by category
- Filter by division (Office/Personal)
- Filter by date range
- Generate financial reports

## 🔗 API Endpoints

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create transaction
- `GET /api/transactions/{id}` - Get by ID
- `PUT /api/transactions/{id}` - Update transaction
- `DELETE /api/transactions/{id}` - Delete transaction
- `GET /api/transactions/type/{type}` - Filter by type
- `GET /api/transactions/category/{category}` - Filter by category
- `GET /api/transactions/division/{division}` - Filter by division
- `GET /api/transactions/filter/date-range` - Filter by date range

### Accounts
- `GET /api/accounts` - Get all accounts
- `POST /api/accounts` - Create account
- `GET /api/accounts/{id}` - Get account by ID
- `PUT /api/accounts/{id}` - Update account
- `GET /api/accounts/active` - Get active accounts
- `PATCH /api/accounts/{id}/deactivate` - Deactivate account
- `GET /api/accounts/total-balance` - Get total balance

### Transfers
- `POST /api/accounts/transfer` - Create transfer
- `GET /api/accounts/transfer` - Get all transfers
- `GET /api/accounts/transfer/account/{accountId}` - Get account transfers
- `GET /api/accounts/transfer/filter/date-range` - Filter by date range

## 📖 Documentation

For detailed documentation:
- **Frontend**: See [frontend/README.md](./frontend/README.md)
- **Backend**: See [backend/README.md](./backend/README.md)

## 🗄 Database

Uses **MongoDB Atlas** for data persistence with the following collections:
- **transactions** - All income/expense records
- **accounts** - Bank accounts
- **transfers** - Fund transfers
- **users** - User profiles

## 🔒 Security Features

- User-based data isolation
- JWT token support
- CORS configuration for frontend integration
- Input validation with Jakarta Bean Validation
- 12-hour transaction edit restriction
- Soft delete for data recovery

## 💻 System Requirements

- **Node.js**: v16 or higher
- **Java**: JDK 17 or higher
- **Maven**: 3.9 or higher
- **MongoDB Atlas**: Account with cluster
- **Modern Browser**: Chrome, Firefox, Safari, Edge

## 📦 Dependencies

### Frontend Dependencies
See [frontend/package.json](./frontend/package.json) for complete list.

Key dependencies:
- react, react-dom
- react-router-dom
- axios
- recharts
- zustand
- tailwindcss

### Backend Dependencies
See [backend/pom.xml](./backend/pom.xml) for complete list.

Key dependencies:
- spring-boot-starter-web
- spring-boot-starter-data-mongodb
- spring-boot-starter-security
- jjwt (JWT)
- modelmapper
- lombok

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Heroku/AWS)
```bash
mvn clean package
```

## 🔄 Environment Profiles

### Backend
- **dev**: Development with local MongoDB
- **prod**: Production with MongoDB Atlas

## 🐛 Troubleshooting

### Frontend Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Port 3000 in use: `npx kill-port 3000`

### Backend Issues
- Maven build failure: `mvn clean install -DskipTests`
- MongoDB connection: Verify Atlas connection string
- Port 8080 in use: Check running services

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support & Contact

For issues, questions, or suggestions:
- Open an issue in the repository
- Check existing documentation
- Review API documentation

---

## 📊 File Organization Summary

### Frontend Files (20+ components)
✓ React components (Sidebar, Navbar, TransactionModal)
✓ Pages (HomePage, Dashboard)
✓ Services (API integration)
✓ Utilities (Helpers, Store management)
✓ Styles (Tailwind CSS configuration)
✓ Configuration files (package.json, tsconfig.js)

### Backend Files (40+ Java classes)
✓ Models (Transaction, Account, Transfer, User)
✓ DTOs (Data Transfer Objects)
✓ Controllers (REST endpoints)
✓ Services (Business logic)
✓ Repositories (Data access)
✓ Configuration (Spring & MongoDB)
✓ Exception handling
✓ Application entry point

---

**Happy Money Managing! 💰**

Built with ❤️ | © 2024 Money Manager
