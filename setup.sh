#!/bin/bash

# Money Manager - Complete Setup Script
# This script sets up both frontend and backend

echo "=================================="
echo "Money Manager - Complete Setup"
echo "=================================="
echo ""

# Check if Node.js is installed
echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js from https://nodejs.org/"
    exit 1
fi
echo "✓ Node.js version: $(node -v)"

# Check if Java is installed
echo "Checking Java installation..."
if ! command -v java &> /dev/null; then
    echo "❌ Java not found. Please install Java 17 or higher"
    exit 1
fi
echo "✓ Java version: $(java -version 2>&1 | head -1)"

# Check if Maven is installed
echo "Checking Maven installation..."
if ! command -v mvn &> /dev/null; then
    echo "❌ Maven not found. Please install Maven"
    exit 1
fi
echo "✓ Maven version: $(mvn -version | head -1)"

echo ""
echo "=================================="
echo "Setting up Frontend..."
echo "=================================="

cd frontend

# Check if .env.local exists
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "⚠️  Created .env.local - Please update with your settings"
fi

# Install npm dependencies
echo "Installing frontend dependencies..."
npm install

echo ""
echo "=================================="
echo "Setting up Backend..."
echo "=================================="

cd ../backend

# Check if .env exists
if [ ! -f .env ]; then
    cp .env.example .env
    echo "⚠️  Created .env - Please update with your MongoDB credentials"
fi

# Build with Maven
echo "Building backend with Maven..."
mvn clean install

echo ""
echo "=================================="
echo "✓ Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Update frontend/.env.local with API URL"
echo "2. Update backend/.env with MongoDB credentials"
echo "3. Start frontend: cd frontend && npm start"
echo "4. Start backend: cd backend && mvn spring-boot:run"
echo ""
echo "Frontend will run on: http://localhost:3000"
echo "Backend will run on: http://localhost:8080/api"
echo ""
