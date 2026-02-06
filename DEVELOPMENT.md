# Money Manager Development Setup Guide

## Quick Start for Developers

### Prerequisites Installation

#### 1. Install Node.js (Frontend)
- Download: https://nodejs.org/ (LTS version recommended)
- Verify: `node -v` and `npm -v`

#### 2. Install Java 17 (Backend)
- Download: https://www.oracle.com/java/technologies/downloads/#java17
- Set JAVA_HOME environment variable
- Verify: `java -version`

#### 3. Install Maven (Backend Build)
- Download: https://maven.apache.org/download.cgi
- Set MAVEN_HOME environment variable
- Verify: `mvn -version`

#### 4. MongoDB Atlas Setup
- Create account: https://www.mongodb.com/cloud/atlas
- Create cluster
- Create database user
- Get connection string
- Whitelist IP address

### Frontend Setup

```bash
cd frontend
cp .env.example .env.local
# Edit .env.local with your settings
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env and src/main/resources/application-dev.yml with MongoDB credentials
mvn clean install
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080/api`

### Verify Installation

Frontend health check:
```bash
curl http://localhost:3000
```

Backend health check:
```bash
curl http://localhost:8080/api/health
```

### API Testing Tools

Install Postman or use curl to test API endpoints:

```bash
# Health check
curl http://localhost:8080/api/health

# Create transaction
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

### Common Issues & Solutions

#### Port Already in Use
```bash
# Linux/Mac
lsof -i :3000  # For frontend
lsof -i :8080  # For backend
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Dependencies Issues
```bash
# Frontend
rm -rf node_modules package-lock.json
npm install

# Backend
mvn clean install -DskipTests
mvn dependency:tree
```

#### MongoDB Connection Fails
1. Verify connection string in .env
2. Check MongoDB Atlas IP whitelist
3. Verify credentials
4. Test with MongoDB Compass

### IDE Setup

#### VS Code (Frontend)
Extensions recommended:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier
- ESLint

#### IntelliJ/Eclipse (Backend)
Plugins recommended:
- Lombok Plugin
- Spring Boot Helper
- MongoDB Plugin
- Maven Helper

### Database Seeding

To add sample data to MongoDB:

```javascript
// Sample transactions
db.transactions.insertMany([
  {
    userId: "test-user-1",
    type: "INCOME",
    description: "Monthly Salary",
    amount: 3500,
    category: "Salary",
    division: "Office",
    transactionDate: new Date(),
    createdAt: new Date(),
    status: "COMPLETED",
    isDeleted: false
  }
])
```

### Build & Deployment

#### Frontend Build
```bash
cd frontend
npm run build
# Output in build/ directory
```

#### Backend Build
```bash
cd backend
mvn clean package
# Output: target/money-manager-backend-1.0.0.jar
```

### Debugging

#### Frontend
- Open DevTools: F12
- Check Console for errors
- Use React Developer Tools extension
- Check Network tab for API calls

#### Backend
- View logs: `mvn spring-boot:run`
- Set log level: Edit application-dev.yml
- Use breakpoints in IDE
- Check MongoDB logs

---

For detailed documentation, see:
- Frontend: frontend/README.md
- Backend: backend/README.md
