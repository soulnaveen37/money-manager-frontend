@echo off
REM Money Manager - Complete Setup Script for Windows
REM This script sets up both frontend and backend

echo.
echo ==================================
echo Money Manager - Complete Setup
echo ==================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
where node >nul 2>nul
if errorlevel 1 (
    echo X Node.js not found. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%a in ('node -v') do set NODE_VERSION=%%a
echo + Node.js version: %NODE_VERSION%

REM Check if Java is installed
echo Checking Java installation...
where java >nul 2>nul
if errorlevel 1 (
    echo X Java not found. Please install Java 17 or higher
    pause
    exit /b 1
)
for /f "tokens=*" %%a in ('java -version 2^>^&1') do (
    set JAVA_VERSION=%%a
    goto :java_found
)
:java_found
echo + Java version: %JAVA_VERSION%

REM Check if Maven is installed
echo Checking Maven installation...
where mvn >nul 2>nul
if errorlevel 1 (
    echo X Maven not found. Please install Maven from https://maven.apache.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%a in ('mvn -version 2^>^&1 ^| findstr /R /C:"Apache Maven"') do set MAVEN_VERSION=%%a
echo + Maven version: %MAVEN_VERSION%

echo.
echo ==================================
echo Setting up Frontend...
echo ==================================

cd frontend

if not exist .env.local (
    copy .env.example .env.local
    echo ! Created .env.local - Please update with your settings
)

echo Installing frontend dependencies...
call npm install

cd ..

echo.
echo ==================================
echo Setting up Backend...
echo ==================================

cd backend

if not exist .env (
    copy .env.example .env
    echo ! Created .env - Please update with your MongoDB credentials
)

echo Building backend with Maven...
call mvn clean install

cd ..

echo.
echo ==================================
echo + Setup Complete!
echo ==================================
echo.
echo Next steps:
echo 1. Update frontend\.env.local with API URL
echo 2. Update backend\.env with MongoDB credentials
echo 3. Update backend\src\main\resources\application-dev.yml
echo 4. Start frontend: cd frontend ^&^& npm start
echo 5. Start backend: cd backend ^&^& mvn spring-boot:run
echo.
echo Frontend will run on: http://localhost:3000
echo Backend will run on: http://localhost:8080/api
echo.
pause
