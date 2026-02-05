# 🎯 Money Manager - Complete Setup Checklist

## Pre-Setup Requirements ✅

- [ ] Node.js v16+ installed ([Check](https://nodejs.org/))
- [ ] Java JDK 17+ installed ([Check](https://www.oracle.com/java/technologies/downloads/))
- [ ] Maven 3.9+ installed ([Check](https://maven.apache.org/download.cgi))
- [ ] MongoDB Atlas account created ([Create Free](https://www.mongodb.com/cloud/atlas))
- [ ] Internet connection available

---

## Step-by-Step Setup Guide

### 🔷 Option 1: Automated Setup (Recommended)

#### Windows Users
```
1. Open Command Prompt (cmd.exe)
2. Navigate to: cd "Path\To\Money Manager Frontend"
3. Run: setup.bat
4. Follow on-screen instructions
5. Configure .env files when prompted
```

#### Linux/Mac Users
```bash
1. Open Terminal
2. Navigate to: cd "Path/To/Money Manager Frontend"
3. Run: chmod +x setup.sh && ./setup.sh
4. Follow on-screen instructions
5. Configure .env files when prompted
```

### 🔶 Option 2: Manual Setup (Step-by-Step)

#### Step 1: Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Copy environment template
cp .env.example .env.local

# Edit .env.local (open with text editor)
# Update: REACT_APP_API_URL=http://localhost:8080/api

# Install dependencies
npm install

# Verify installation
npm --version
```

#### Step 2: Backend Setup
```bash
# Navigate to backend
cd ../backend

# Copy environment template
cp .env.example .env

# Edit .env file with MongoDB credentials
# Required variables:
# MONGO_USERNAME=your_mongodb_username
# MONGO_PASSWORD=your_mongodb_password
# MONGO_CLUSTER=your_cluster_name
# MONGO_DATABASE=money-manager

# Edit application-dev.yml
# Update MongoDB connection string

# Install dependencies
mvn clean install

# Verify Maven
mvn -version
```

---

## Configuration Details

### 📝 Frontend Configuration (.env.local)

```env
# API Endpoint (backend URL)
REACT_APP_API_URL=http://localhost:8080/api

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_TRANSACTION_EDIT_LIMIT_HOURS=12

# Environment
REACT_APP_ENVIRONMENT=development
```

**Location**: `frontend/.env.local`

### 🔐 Backend Configuration (.env)

```env
# MongoDB Atlas Credentials
MONGO_USERNAME=your_mongodb_username
MONGO_PASSWORD=your_mongodb_password
MONGO_CLUSTER=your_cluster_name
MONGO_DATABASE=money-manager

# JWT Configuration
JWT_SECRET=your_secret_key_here_change_in_production
JWT_EXPIRATION=86400000
```

**Location**: `backend/.env`

### 🛠️ Backend Application Configuration

**File**: `backend/src/main/resources/application-dev.yml`

```yaml
spring:
  data:
    mongodb:
      # Full MongoDB connection string
      uri: mongodb+srv://username:password@cluster.mongodb.net/money-manager
      database: money-manager
      auto-index-creation: true

server:
  port: 8080
  servlet:
    context-path: /api

logging:
  level:
    root: INFO
    com.moneymanager: DEBUG

jwt:
  secret: your_secret_key
  expiration: 86400000

cors:
  allowed-origins: http://localhost:3000,http://localhost:5173
```

---

## Running the Application

### ✅ Start Frontend

```bash
# Terminal 1 - Frontend
cd frontend
npm start

# Should output:
# Compiled successfully!
# Local: http://localhost:3000
```

### ✅ Start Backend

```bash
# Terminal 2 - Backend
cd backend
mvn spring-boot:run

# Should output:
# Started MoneyManagerApplication in X seconds
# Server running on port 8080
```

### ✅ Verify Both Are Running

```bash
# Test Frontend
open http://localhost:3000

# Test Backend API
curl http://localhost:8080/api/health

# Expected Response:
# {"status":"UP","message":"Money Manager Backend is running"}
```

---

## 🧪 Testing the Application

### Test 1: Frontend Loads
- [ ] Open http://localhost:3000 in browser
- [ ] Should see Money Manager dashboard
- [ ] No console errors

### Test 2: API Health Check
```bash
curl http://localhost:8080/api/health
```
Expected response:
```json
{
  "status": "UP",
  "message": "Money Manager Backend is running",
  "timestamp": 1707123456789
}
```

### Test 3: Create Transaction
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
Expected response: 201 Created

### Test 4: Get Transactions
```bash
curl http://localhost:8080/api/transactions \
  -H "X-User-Id: test-user-1"
```
Expected response: Array of transactions

---

## 📁 Project Structure Verification

After setup, verify these files exist:

### Frontend Files
- [ ] `frontend/src/components/` - Has 4 component files
- [ ] `frontend/src/pages/` - Has 2 page files
- [ ] `frontend/src/services/api.js` - Exists
- [ ] `frontend/src/utils/` - Has store.js, helpers.js
- [ ] `frontend/package.json` - Dependencies listed
- [ ] `frontend/.env.local` - Created and configured

### Backend Files
- [ ] `backend/src/main/java/com/moneymanager/model/` - 4 model files
- [ ] `backend/src/main/java/com/moneymanager/controller/` - 5 controller files
- [ ] `backend/src/main/java/com/moneymanager/service/` - 4 service files
- [ ] `backend/pom.xml` - Dependencies listed
- [ ] `backend/.env` - Created and configured
- [ ] `backend/src/main/resources/application-dev.yml` - Configured

---

## 🔧 Troubleshooting

### Issue: Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Issue: Port 8080 Already in Use
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :8080
kill -9 <PID>
```

### Issue: MongoDB Connection Failed
- [ ] Verify connection string is correct
- [ ] Check IP whitelist in MongoDB Atlas
- [ ] Verify username and password
- [ ] Test with MongoDB Compass

### Issue: npm install Fails
```bash
# Clear cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Maven Build Fails
```bash
# Clean build
mvn clean install -DskipTests

# Check dependencies
mvn dependency:tree
```

### Issue: React Components Not Showing
- [ ] Check browser console (F12)
- [ ] Verify API_URL in .env.local
- [ ] Check backend is running
- [ ] Clear browser cache

---

## 📊 Verification Checklist

### ✅ Before Starting
- [ ] Node.js version 16+
- [ ] Java version 17+
- [ ] Maven version 3.9+
- [ ] MongoDB Atlas account active
- [ ] Internet connection working

### ✅ After Frontend Setup
- [ ] npm install completed successfully
- [ ] .env.local created with correct values
- [ ] node_modules folder exists
- [ ] package.json dependencies visible

### ✅ After Backend Setup
- [ ] mvn install completed successfully
- [ ] .env created with MongoDB credentials
- [ ] application-dev.yml configured
- [ ] target folder created with build

### ✅ After Running Applications
- [ ] Frontend runs on http://localhost:3000
- [ ] Backend runs on http://localhost:8080
- [ ] No errors in console
- [ ] API health check passes
- [ ] Can create transactions via API

### ✅ Testing Completed
- [ ] Frontend loads in browser
- [ ] Dashboard displays correctly
- [ ] API responds to health check
- [ ] Can create transaction via API
- [ ] Transaction appears in list

---

## 🚀 What to Do Next

### After Successful Setup

1. **Explore the Application**
   - Navigate through the dashboard
   - Try adding transactions
   - Test filtering options

2. **Test with Sample Data**
   - Add income transactions
   - Add expense transactions
   - Transfer between accounts

3. **Review the Code**
   - Check frontend components
   - Review backend services
   - Understand the API structure

4. **Customize**
   - Change colors in tailwind.config.js
   - Add new transaction categories
   - Extend API endpoints

5. **Deploy** (Later)
   - Frontend: Deploy to Vercel/Netlify
   - Backend: Deploy to Heroku/AWS
   - Database: MongoDB Atlas (already cloud)

---

## 📚 Documentation Files

After setup, read these files to understand the project:

| Priority | File | Purpose |
|----------|------|---------|
| 1️⃣ | [QUICKSTART.md](QUICKSTART.md) | 5-minute overview |
| 2️⃣ | [frontend/README.md](frontend/README.md) | Frontend guide |
| 3️⃣ | [backend/README.md](backend/README.md) | Backend guide |
| 4️⃣ | [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Complete overview |
| 5️⃣ | [STRUCTURE.md](STRUCTURE.md) | File structure |

---

## 🎯 Common Tasks

### How to Add a New Feature
1. Design API endpoint
2. Create backend service method
3. Add controller endpoint
4. Create frontend component
5. Connect via API service
6. Style with Tailwind CSS

### How to Modify API
1. Edit service class
2. Update controller method
3. Update .yml configuration if needed
4. Test with curl/Postman
5. Update frontend API client

### How to Change Styling
1. Edit frontend/src/styles/
2. Or modify tailwind.config.js
3. Or add inline Tailwind classes
4. See frontend/README.md → Styling section

---

## 💡 Pro Tips

✅ **Use two terminals**: One for frontend, one for backend
✅ **Keep .env files safe**: Don't commit to git
✅ **Test API first**: Use curl before frontend
✅ **Check logs**: Look at console for errors
✅ **Use Postman**: For complex API testing
✅ **Read documentation**: Before asking questions

---

## 📞 Still Need Help?

1. **Setup Issues** → Check [DEVELOPMENT.md](DEVELOPMENT.md)
2. **Frontend Questions** → Check [frontend/README.md](frontend/README.md)
3. **Backend Questions** → Check [backend/README.md](backend/README.md)
4. **API Documentation** → Check [backend/README.md](backend/README.md) → API Section
5. **Project Overview** → Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## ✅ Setup Complete!

Once all checklist items are checked, you're ready to:
- ✨ Develop new features
- 🧪 Test functionality
- 📦 Prepare for deployment
- 🚀 Build your financial management system

**Happy coding! 🎉**

---

**Last Updated**: February 5, 2024
**Status**: ✅ Complete & Ready to Use
