# Notification Project
** By Julian Carrasco - JulianCAx86@gmail.com **

## Overview

This project implements a notification system that can send messages based on categories and notify subscribed users through various channels. The system is designed to be scalable, easy to maintain, and prepared for future expansions.

## Architecture

The project uses a split architecture with backend and frontend components:

- **Backend**: Developed in Node.js with Express, it handles business logic, database interactions with MongoDB, and the API for frontend requests.
- **Frontend**: Implemented with React, it provides the user interface for sending notifications and viewing their history.

### Design Patterns Implemented

1. **Factory Pattern**: Used to create notification objects depending on the type of channel (SMS, Email, Push Notification), facilitating the addition of new notification types without altering existing code.
2. **Strategy Pattern**: Could be implemented for different notification strategies, although the current structure primarily uses the Factory pattern.

### Best Practices

- **Object-Oriented Programming**: Uses classes and inheritance to define different types of notifications.
- **SOLID Principles**: Particularly dependency inversion and separation of concerns to reduce coupling.
- **Exception Handling**: Ensures the system is robust and reports errors clearly.
- **Validations**: Ensures incoming data via the API is properly validated before processing.

## Project Setup

### Prerequisites

Before installing the project, ensure you have Node.js and MongoDB installed on your system. npm or yarn is also recommended for package management.

### Installation

#### Backend

1. Navigate to the backend directory.
2. Install the dependencies with npm or yarn:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

#### Frontend

1. Navigate to the frontend directory.
2. Similarly, install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Project

#### Backend

To start the backend server, run:
```
npm start
```
or
```
yarn start
```

#### Frontend

To start the frontend application, use:
```
npm start
```
or
```
yarn start
```

### Running Tests

#### Backend

To run unit tests on the backend:
```
npm test
```
or
```
yarn test
```

#### Frontend

Similarly, run the unit tests defined for the frontend:
```
npm test
```
or
```
yarn test
```




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
