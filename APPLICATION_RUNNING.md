# 🎉 Money Manager Application - NOW RUNNING!

## ✅ Application Status

Your Money Manager application is **UP AND RUNNING**!

---

## 🚀 Services Running

### Backend (Spring Boot)
- **Status**: ✅ Running
- **URL**: http://localhost:8080/api
- **Port**: 8080
- **Profile**: dev (development)
- **Database**: MongoDB localhost (mongodb://localhost:27017/money-manager-dev)

### Frontend (React)
- **Status**: ✅ Running  
- **URL**: http://localhost:3000
- **Port**: 3000
- **Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.6

---

## 📱 Access Your Application

**Open in Browser**: [http://localhost:3000](http://localhost:3000)

---

## 🔧 API Endpoints Available

### Health Check
- **GET** `/api/health` - Backend health status

### Transactions
- **POST** `/api/transactions` - Create transaction
- **GET** `/api/transactions` - Get all transactions
- **GET** `/api/transactions/{id}` - Get transaction by ID
- **PUT** `/api/transactions/{id}` - Update transaction
- **DELETE** `/api/transactions/{id}` - Delete transaction
- **GET** `/api/transactions/type/{type}` - Filter by type
- **GET** `/api/transactions/category/{category}` - Filter by category
- **GET** `/api/transactions/division/{division}` - Filter by division
- **GET** `/api/transactions/filter/date-range` - Date range filter

### Accounts
- **POST** `/api/accounts` - Create account
- **GET** `/api/accounts` - Get all accounts
- **GET** `/api/accounts/{id}` - Get account by ID
- **PUT** `/api/accounts/{id}` - Update account
- **GET** `/api/accounts/active` - Get active accounts
- **PATCH** `/api/accounts/{id}/deactivate` - Deactivate account
- **GET** `/api/accounts/total-balance` - Get total balance

### Transfers
- **POST** `/api/accounts/transfer` - Create transfer
- **GET** `/api/accounts/transfer` - Get all transfers
- **GET** `/api/accounts/transfer/account/{id}` - Get transfers for account
- **GET** `/api/accounts/transfer/filter/date-range` - Date range filter

### Dashboard/Reports
- **GET** `/api/dashboard/monthly` - Monthly report
- **GET** `/api/dashboard/weekly` - Weekly report
- **GET** `/api/dashboard/yearly` - Yearly report
- **GET** `/api/dashboard/categories` - Category summary

---

## 📝 Quick Start Guide

### 1. **View Dashboard**
   - Homepage shows quick stats and recent transactions
   - Click "Dashboard" to see charts and analytics

### 2. **Add a Transaction**
   - Click the "+ Add" button on the home page
   - Choose Income or Expense tab
   - Fill in the details:
     - Description
     - Amount
     - Category
     - Division (Office/Personal)
     - Date

### 3. **View Reports**
   - Click "Dashboard" in sidebar
   - Select time period: Week, Month, or Year
   - View income/expense breakdown by category

### 4. **Manage Accounts**
   - Create accounts for tracking
   - Transfer funds between accounts
   - View account balances

---

## ⚙️ Environment Configuration

### Current Settings
- **Backend Database**: Local MongoDB (localhost:27017)
- **Frontend API Base URL**: http://localhost:8080/api
- **CORS**: Enabled for localhost:3000 and localhost:5173

### For Production Use
1. Update `backend/src/main/resources/application.yml`
2. Configure MongoDB Atlas credentials
3. Update frontend `.env` with production API URL
4. Run `npm run build` for frontend production build
5. Run `mvn clean install` for backend production JAR

---

## 🛠️ To Stop the Application

### Terminal 1 (Backend)
Press `Ctrl + C` to stop Spring Boot

### Terminal 2 (Frontend)
Press `Ctrl + C` to stop React dev server

---

## 📚 For More Information

- **Setup Guide**: [QUICKSTART.md](QUICKSTART.md)
- **Detailed Setup**: [DEVELOPMENT.md](DEVELOPMENT.md)
- **API Documentation**: [backend/README.md](backend/README.md)
- **Frontend Guide**: [frontend/README.md](frontend/README.md)
- **Project Overview**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## ✨ Features Available

✅ Dashboard with time-based analytics  
✅ Transaction management (income/expense)  
✅ Multiple account support  
✅ Fund transfers between accounts  
✅ Advanced filtering & search  
✅ Category-wise spending analysis  
✅ Responsive design  
✅ 12-hour edit window restriction  
✅ Soft delete with recovery  
✅ Real-time balance tracking  

---

## 🎯 Next Steps

1. **Explore the App**: Click around, add some transactions
2. **Test the API**: Use Postman or curl to test endpoints
3. **Customize**: Modify colors, categories, or features
4. **Add Data**: Create accounts and transactions to populate dashboard
5. **Deploy**: Follow deployment guide in [DEVELOPMENT.md](DEVELOPMENT.md)

---

## 🐛 Troubleshooting

### Backend Not Starting?
- Check MongoDB is running: `mongodb://localhost:27017`
- Clear Maven cache: `mvn clean`
- Check port 8080 is not in use: `netstat -ano | findstr :8080`

### Frontend Not Starting?
- Clear node_modules: `rm -r node_modules && npm install`
- Check port 3000 is not in use: `netstat -ano | findstr :3000`
- Check Node.js version: `node --version` (should be 14+)

### API Connection Issues?
- Verify backend is running on port 8080
- Check CORS configuration in backend
- Check frontend .env has correct API URL
- Open browser DevTools → Network tab to debug API calls

---

## 📞 Support

For detailed troubleshooting, see:
- **Backend Issues**: [backend/README.md](backend/README.md#troubleshooting)
- **Frontend Issues**: [frontend/README.md](frontend/README.md#troubleshooting)
- **General Setup**: [DEVELOPMENT.md](DEVELOPMENT.md#troubleshooting)

---

## 🎉 Enjoy Your Money Manager!

**Application Started**: $(Get-Date)  
**Status**: ✅ Ready to Use  
**Frontend**: http://localhost:3000  
**Backend API**: http://localhost:8080/api  

Happy money managing! 💰
