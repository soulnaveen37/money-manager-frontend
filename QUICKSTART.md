# 🚀 Money Manager - Quick Start Guide

A complete financial management application with React frontend and Spring Boot backend.

## 📦 What You Get

A **complete, production-ready Money Manager application** with:

✅ **Frontend** (React + Tailwind CSS)
- Dashboard with analytics
- Transaction management
- Income/Expense tracking
- Account management
- Fund transfers
- Advanced filtering
- Responsive design

✅ **Backend** (Java Spring Boot)
- RESTful API with 15+ endpoints
- MongoDB Atlas integration
- Transaction management
- Account & transfer operations
- Advanced reporting
- CORS enabled

✅ **Full Documentation**
- Setup guides
- API documentation
- Component documentation
- Database schema
- Troubleshooting guides

---

## 🎯 5-Minute Setup

### Prerequisites
- Node.js 16+ ([Download](https://nodejs.org/))
- Java 17+ ([Download](https://www.oracle.com/java/technologies/downloads/))
- Maven 3.9+ ([Download](https://maven.apache.org/))
- MongoDB Atlas Account ([Create Free](https://www.mongodb.com/cloud/atlas))

### Quick Start (Windows)
```bash
# Run setup script
setup.bat

# Follow prompts to configure environment variables
```

### Quick Start (Linux/Mac)
```bash
# Run setup script
chmod +x setup.sh
./setup.sh

# Follow prompts to configure environment variables
```

### Manual Setup

**1. Frontend Setup**
```bash
cd frontend
npm install
# Edit .env.local with API URL
npm start
```
→ Opens http://localhost:3000

**2. Backend Setup**
```bash
cd backend
# Edit .env and src/main/resources/application-dev.yml
mvn spring-boot:run
```
→ API at http://localhost:8080/api

---

## 📋 Features Overview

### Dashboard
- **Monthly View**: Income vs Expenses chart
- **Weekly View**: Daily transaction breakdown
- **Yearly View**: Annual financial trends
- **Category Report**: Spending by category

### Transactions
- **Add**: Create income or expense transactions
- **Categories**: Food, Fuel, Movie, Medical, Loan, Salary, Freelance, Investment, Gift, Bonus
- **Divisions**: Office or Personal
- **Edit**: Within 12 hours of creation
- **Delete**: Soft delete with recovery option
- **Filter**: By type, category, division, date range

### Accounts
- **Create**: Multiple bank accounts
- **Types**: Savings, Checking, Investment
- **Balance Tracking**: Real-time balance updates
- **Deactivate**: Manage inactive accounts

### Transfers
- **Fund Transfer**: Between user accounts
- **Validation**: Sufficient balance checks
- **History**: Complete transfer records
- **Status Tracking**: Pending, Completed, Failed

---

## 🔗 API Endpoints (15+)

### Transactions
```
POST   /api/transactions              # Create
GET    /api/transactions              # List all
GET    /api/transactions/:id          # Get by ID
PUT    /api/transactions/:id          # Update
DELETE /api/transactions/:id          # Delete
GET    /api/transactions/type/:type   # Filter by type
GET    /api/transactions/category/:cat # Filter by category
GET    /api/transactions/division/:div # Filter by division
GET    /api/transactions/filter/date-range # Date range
```

### Accounts
```
POST   /api/accounts                  # Create
GET    /api/accounts                  # List all
GET    /api/accounts/:id              # Get by ID
PUT    /api/accounts/:id              # Update
GET    /api/accounts/active           # Active only
PATCH  /api/accounts/:id/deactivate   # Deactivate
GET    /api/accounts/total-balance    # Total balance
```

### Transfers
```
POST   /api/accounts/transfer         # Create
GET    /api/accounts/transfer         # List all
GET    /api/accounts/transfer/account/:id # By account
GET    /api/accounts/transfer/filter/date-range
```

### Dashboard
```
GET    /api/dashboard/monthly         # Monthly report
GET    /api/dashboard/weekly          # Weekly report
GET    /api/dashboard/yearly          # Yearly report
GET    /api/dashboard/categories      # Category report
```

### Health
```
GET    /api/health                    # Health check
```

---

## 📁 Project Structure

```
Money Manager Frontend/
├── frontend/          (React application)
│   ├── src/
│   │   ├── components/    (UI components)
│   │   ├── pages/        (Page components)
│   │   ├── services/     (API integration)
│   │   ├── hooks/        (Custom hooks)
│   │   ├── utils/        (Utilities)
│   │   └── styles/       (CSS files)
│   ├── package.json
│   └── README.md
│
├── backend/           (Spring Boot application)
│   ├── src/main/
│   │   ├── java/com/moneymanager/
│   │   │   ├── model/        (Entities)
│   │   │   ├── dto/          (Data transfer objects)
│   │   │   ├── controller/   (REST endpoints)
│   │   │   ├── service/      (Business logic)
│   │   │   ├── repository/   (Data access)
│   │   │   ├── exception/    (Exceptions)
│   │   │   └── config/       (Configuration)
│   │   └── resources/
│   │       └── application*.yml
│   ├── pom.xml
│   └── README.md
│
├── README.md          (This file)
├── DEVELOPMENT.md     (Development guide)
├── STRUCTURE.md       (Detailed structure)
├── setup.sh          (Linux/Mac setup)
└── setup.bat         (Windows setup)
```

---

## 🔧 Configuration

### Environment Variables

**Frontend (.env.local)**
```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_TRANSACTION_EDIT_LIMIT_HOURS=12
REACT_APP_ENVIRONMENT=development
```

**Backend (.env)**
```env
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
MONGO_CLUSTER=your_cluster
MONGO_DATABASE=money-manager
JWT_SECRET=your_secret_key
```

**Backend (application-dev.yml)**
```yaml
spring:
  data:
    mongodb:
      uri: mongodb+srv://username:password@cluster.mongodb.net/money-manager
```

---

## 🧪 Testing the Application

### Test Health
```bash
curl http://localhost:8080/api/health
```

### Test Create Transaction
```bash
curl -X POST http://localhost:8080/api/transactions \
  -H "Content-Type: application/json" \
  -H "X-User-Id: test-user-1" \
  -d '{
    "type": "INCOME",
    "description": "Test Income",
    "amount": 1000,
    "category": "Salary",
    "division": "Office",
    "transactionDate": "2024-02-05T10:30:00"
  }'
```

### Test Get Transactions
```bash
curl -H "X-User-Id: test-user-1" \
  http://localhost:8080/api/transactions
```

---

## 🐛 Troubleshooting

### Frontend won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Backend build fails
```bash
# Clean and rebuild
mvn clean install -DskipTests
mvn dependency:tree
```

### MongoDB connection error
- Verify connection string in .env
- Check IP whitelist in MongoDB Atlas
- Verify username/password
- Test with MongoDB Compass

### Ports already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| [README.md](README.md) | Root documentation |
| [frontend/README.md](frontend/README.md) | Frontend setup & features |
| [backend/README.md](backend/README.md) | Backend setup & API docs |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Development setup guide |
| [STRUCTURE.md](STRUCTURE.md) | Complete project structure |

---

## 🚀 Next Steps

1. **Setup**: Run `setup.bat` (Windows) or `setup.sh` (Linux/Mac)
2. **Configure**: Update `.env` files with your MongoDB credentials
3. **Frontend**: `cd frontend && npm start`
4. **Backend**: `cd backend && mvn spring-boot:run`
5. **Test**: Visit http://localhost:3000

---

## 💡 Key Features

✨ **Complete Finance Management**
- Track income and expenses
- Manage multiple accounts
- Transfer funds between accounts
- Generate detailed reports

📊 **Advanced Analytics**
- Monthly, weekly, yearly views
- Category-based breakdown
- Trend analysis
- Balance tracking

🔐 **Security Features**
- User data isolation
- 12-hour edit window
- Soft delete recovery
- Input validation

📱 **Responsive Design**
- Works on desktop, tablet, mobile
- Tailwind CSS styling
- Smooth animations
- Intuitive UI

---

## 🔗 Tech Stack

**Frontend**: React 18 • Tailwind CSS 3 • React Router 6 • Axios • Recharts • Zustand

**Backend**: Spring Boot 3 • Java 17 • MongoDB Atlas • Spring Data • JWT • Lombok

**Build**: npm • Maven 3.9

---

## 📞 Support

- Check [DEVELOPMENT.md](DEVELOPMENT.md) for setup help
- See [backend/README.md](backend/README.md) for API documentation
- Review [frontend/README.md](frontend/README.md) for UI guide
- Check [STRUCTURE.md](STRUCTURE.md) for complete file structure

---

## 📄 License

MIT License - Free to use and modify

---

## 📈 Project Stats

- **55+ files** created
- **27+ backend Java classes**
- **15+ frontend React components**
- **15+ API endpoints**
- **4 MongoDB collections**
- **100% documented**

---

**🎉 Ready to manage your finances!**

Start with: `setup.bat` (Windows) or `setup.sh` (Linux/Mac)

Built with ❤️ | © 2024 Money Manager
