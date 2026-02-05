# Project Structure Documentation

## Complete File Tree

```
Money Manager Frontend/
│
├── frontend/                                  # React Frontend (NPM Project)
│   ├── public/
│   │   └── index.html                        # HTML entry point
│   │
│   ├── src/
│   │   ├── components/                       # Reusable Components
│   │   │   ├── Sidebar.jsx                  # Navigation sidebar
│   │   │   ├── Navbar.jsx                   # Top navigation bar
│   │   │   └── TransactionModal.jsx         # Transaction add/edit modal
│   │   │
│   │   ├── pages/                           # Page Components
│   │   │   ├── HomePage.jsx                 # Main dashboard page
│   │   │   └── Dashboard.jsx                # Analytics dashboard
│   │   │
│   │   ├── services/                        # API Service Layer
│   │   │   └── api.js                       # Axios API client configuration
│   │   │
│   │   ├── hooks/                           # Custom React Hooks
│   │   │   ├── useTransaction.js            # Transaction hook
│   │   │   ├── useApi.js                    # API hook
│   │   │   └── index.js                     # Hooks exports
│   │   │
│   │   ├── utils/                           # Utility Functions
│   │   │   ├── store.js                     # Zustand state management
│   │   │   ├── helpers.js                   # Helper functions
│   │   │   └── constants.js                 # Constants (if needed)
│   │   │
│   │   ├── styles/                          # CSS Styles
│   │   │   ├── index.css                    # Global styles
│   │   │   └── App.css                      # Application specific styles
│   │   │
│   │   ├── App.jsx                          # Root component
│   │   └── index.jsx                        # React entry point
│   │
│   ├── package.json                         # NPM dependencies
│   ├── tailwind.config.js                   # Tailwind CSS config
│   ├── postcss.config.js                    # PostCSS config
│   ├── .env.example                         # Environment variables template
│   ├── .gitignore                           # Git ignore rules
│   └── README.md                            # Frontend documentation
│
│
├── backend/                                  # Spring Boot Backend (Maven Project)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/moneymanager/
│   │   │   │   │
│   │   │   │   ├── model/                   # Database Models/Entities
│   │   │   │   │   ├── Transaction.java     # Transaction entity
│   │   │   │   │   ├── Account.java         # Account entity
│   │   │   │   │   ├── Transfer.java        # Transfer entity
│   │   │   │   │   └── User.java            # User entity
│   │   │   │   │
│   │   │   │   ├── dto/                     # Data Transfer Objects
│   │   │   │   │   ├── TransactionDTO.java  # Transaction DTO
│   │   │   │   │   ├── AccountDTO.java      # Account DTO
│   │   │   │   │   ├── TransferDTO.java     # Transfer DTO
│   │   │   │   │   └── UserDTO.java         # User DTO
│   │   │   │   │
│   │   │   │   ├── repository/              # Data Access Layer (MongoDB)
│   │   │   │   │   ├── TransactionRepository.java
│   │   │   │   │   ├── AccountRepository.java
│   │   │   │   │   ├── TransferRepository.java
│   │   │   │   │   └── UserRepository.java
│   │   │   │   │
│   │   │   │   ├── service/                 # Business Logic Layer
│   │   │   │   │   ├── TransactionService.java
│   │   │   │   │   ├── AccountService.java
│   │   │   │   │   ├── TransferService.java
│   │   │   │   │   └── DashboardService.java
│   │   │   │   │
│   │   │   │   ├── controller/              # REST API Endpoints
│   │   │   │   │   ├── TransactionController.java
│   │   │   │   │   ├── AccountController.java
│   │   │   │   │   ├── TransferController.java
│   │   │   │   │   ├── DashboardController.java
│   │   │   │   │   └── HealthController.java
│   │   │   │   │
│   │   │   │   ├── exception/               # Custom Exception Classes
│   │   │   │   │   ├── ResourceNotFoundException.java
│   │   │   │   │   ├── UnauthorizedException.java
│   │   │   │   │   └── InvalidOperationException.java
│   │   │   │   │
│   │   │   │   ├── config/                  # Spring Configuration
│   │   │   │   │   ├── AppConfig.java       # App configuration
│   │   │   │   │   └── WebConfig.java       # Web/CORS configuration
│   │   │   │   │
│   │   │   │   ├── utils/                   # Utility Classes
│   │   │   │   │   └── Constants.java       # Constants
│   │   │   │   │
│   │   │   │   └── MoneyManagerApplication.java  # Main Spring Boot class
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── application.yml          # Base application config
│   │   │       └── application-dev.yml      # Development config
│   │   │
│   │   └── test/
│   │       └── java/com/moneymanager/       # Test classes
│   │
│   ├── pom.xml                              # Maven POM file (Dependencies)
│   ├── .env.example                         # Environment variables template
│   ├── .gitignore                           # Git ignore rules
│   └── README.md                            # Backend documentation
│
│
├── README.md                                # Root documentation
├── DEVELOPMENT.md                           # Development setup guide
├── STRUCTURE.md                             # This file
├── setup.sh                                 # Linux/Mac setup script
├── setup.bat                                # Windows setup script
└── .gitignore                               # Root git ignore

```

## Summary Statistics

### Frontend Files
- **React Components**: 4 (Sidebar, Navbar, TransactionModal, HomePage, Dashboard)
- **Pages**: 2 (HomePage, Dashboard)
- **Services**: 1 API service file
- **Hooks**: 2 custom hooks
- **Utility Files**: 2 (store, helpers)
- **Configuration Files**: 3 (tailwind, postcss, package.json)
- **Total Frontend Files**: 15+

### Backend Files
- **Models**: 4 Java entities
- **DTOs**: 4 Data transfer objects
- **Repositories**: 4 MongoDB repository interfaces
- **Services**: 4 business logic services
- **Controllers**: 5 REST API controllers
- **Exceptions**: 3 custom exceptions
- **Configuration**: 2 Spring configuration classes
- **Utilities**: 1 Constants file
- **Total Backend Files**: 27+

### Configuration Files
- Frontend: package.json, tailwind.config.js, postcss.config.js, .env.example
- Backend: pom.xml, application.yml, application-dev.yml, .env.example
- Root: README.md, DEVELOPMENT.md, setup.sh, setup.bat

## Total Files Created: 55+

## Dependencies Summary

### Frontend Dependencies (11)
- React & React DOM
- React Router
- Axios
- Tailwind CSS
- Recharts
- Zustand
- React Icons
- date-fns
- PostCSS & Autoprefixer
- Tailwind CSS plugins

### Backend Dependencies (12+)
- Spring Boot Starters (Web, Data MongoDB, Validation, Security)
- MongoDB Driver
- JWT (JJWT)
- Lombok
- ModelMapper
- Jakarta APIs
- Log4j2
- Test dependencies

---

**Total Project Components: 55+ files with complete setup and configuration**
