# Money Manager Frontend

A React-based web application for managing personal and business finances with an intuitive dashboard, transaction tracking, and financial analytics.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Component Documentation](#component-documentation)
- [Styling](#styling)
- [Contributing](#contributing)

## ✨ Features

- **Dashboard**: View income and expenses with monthly, weekly, and yearly breakdowns
- **Transaction Management**: Add, edit, and delete income and expense transactions
- **Categories**: Track transactions with predefined categories (Food, Fuel, Movie, Medical, Loan, etc.)
- **Divisions**: Categorize expenses into Office or Personal divisions
- **Date Range Filtering**: Filter transactions between specific dates
- **Edit Restrictions**: Transactions can only be edited within 12 hours of creation
- **Category Summary**: View summary of expenses by category
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠 Tech Stack

- **Framework**: React 18.2.0
- **Routing**: React Router v6.20.0
- **Styling**: Tailwind CSS 3.3.6
- **HTTP Client**: Axios 1.6.0
- **Charts**: Recharts 2.10.0
- **State Management**: Zustand 4.4.0
- **Icons**: React Icons 4.12.0
- **Date Handling**: date-fns 2.30.0

## 📁 Project Structure

```
frontend/
├── public/                          # Static assets
│   └── index.html                  # HTML entry point
├── src/
│   ├── components/                 # Reusable React components
│   │   ├── Sidebar.jsx            # Navigation sidebar
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   └── TransactionModal.jsx   # Modal for adding transactions
│   ├── pages/                     # Page components
│   │   ├── HomePage.jsx           # Home/Main page
│   │   └── Dashboard.jsx          # Dashboard with analytics
│   ├── services/                  # API service layer
│   │   └── api.js                # API client configuration
│   ├── styles/                    # CSS files
│   │   ├── index.css             # Global styles
│   │   └── App.css               # Application styles
│   ├── utils/                    # Utility functions
│   │   ├── store.js              # Zustand store management
│   │   └── helpers.js            # Helper functions
│   ├── hooks/                    # Custom React hooks
│   ├── App.jsx                   # Root app component
│   └── index.jsx                 # React entry point
├── package.json                  # Project dependencies
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd Money\ Manager\ Frontend/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a `.env.local` file in the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:8080/api
   ```

## 🏃 Running the Application

### Development Mode

```bash
npm start
```

The application will open at `http://localhost:3000`

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Running Tests

```bash
npm test
```

## 🔐 Environment Variables

Create a `.env.local` file in the frontend directory:

```
# API Configuration
REACT_APP_API_URL=http://localhost:8080/api

# Features
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_TRANSACTION_EDIT_LIMIT_HOURS=12
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from create-react-app (irreversible) |

## 🔗 API Integration

### Base URL
```
http://localhost:8080/api
```

### Authentication Header
All requests require the user ID header:
```
X-User-Id: <user-id>
```

### Available Endpoints

#### Transactions
- `GET /transactions` - Get all transactions
- `POST /transactions` - Create new transaction
- `GET /transactions/:id` - Get transaction by ID
- `PUT /transactions/:id` - Update transaction
- `DELETE /transactions/:id` - Delete transaction
- `GET /transactions/type/:type` - Get by type (INCOME/EXPENSE)
- `GET /transactions/category/:category` - Get by category
- `GET /transactions/division/:division` - Get by division (Office/Personal)
- `GET /transactions/filter/date-range` - Get by date range

#### Accounts
- `GET /accounts` - Get all accounts
- `POST /accounts` - Create account
- `GET /accounts/:id` - Get account by ID
- `PUT /accounts/:id` - Update account
- `GET /accounts/active` - Get active accounts
- `GET /accounts/total-balance` - Get total balance

#### Transfers
- `POST /accounts/transfer` - Create transfer
- `GET /accounts/transfer` - Get all transfers
- `GET /accounts/transfer/account/:accountId` - Get transfers for account
- `GET /accounts/transfer/filter/date-range` - Get transfers by date range

## 🎨 Component Documentation

### Sidebar
Navigation component for switching between pages.

### Navbar
Top navigation bar with notifications and profile access.

### HomePage
Main page with quick stats and recent transaction history.

### Dashboard
Analytics dashboard with charts for income/expense visualization.

### TransactionModal
Modal dialog for adding new income or expense transactions.

## 🎯 Styling

This project uses **Tailwind CSS** for styling. Tailwind CSS configuration is in `tailwind.config.js`.

### Custom Classes

- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-danger` - Danger/delete button
- `.card` - Card component
- `.input-field` - Input field styling
- `.modal-overlay` - Modal background overlay

### Custom Colors

```
primary: #3B82F6 (Blue)
secondary: #10B981 (Green)
danger: #EF4444 (Red)
warning: #F59E0B (Orange)
dark: #1F2937 (Dark Gray)
light: #F3F4F6 (Light Gray)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions, please open an issue in the repository or contact the development team.

---

**Happy Money Managing! 💰**
