# Finance Dashboard

A clean and interactive finance dashboard built with React and Tailwind CSS for tracking personal financial activity.

## Features

- **Dashboard Overview**: Summary cards showing total balance, income, and expenses
- **Interactive Charts**: Line chart for balance trend over time and pie chart for spending breakdown by category
- **Transactions Management**: View, search, and filter transactions with role-based access
- **Role-Based UI**: Switch between Viewer (read-only) and Admin (can add transactions) roles
- **Insights Section**: Key financial insights like highest spending category and average expense
- **Data Persistence**: Transactions are saved to localStorage

## Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Build Tool**: Vite
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd finance-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5174](http://localhost:5174) in your browser.

## Project Structure

```
src/
├── components/
│   ├── AddTransaction.jsx    # Modal for adding new transactions
│   └── RoleSwitcher.jsx      # Role selection dropdown
├── context/
│   └── AppContext.jsx        # Global state management
├── data/
│   └── mockData.js           # Initial transaction data
├── pages/
│   ├── Dashboard.jsx         # Main dashboard with cards and charts
│   ├── Transactions.jsx      # Transaction list with filters
│   └── Insights.jsx          # Financial insights
├── App.jsx                   # Main app component
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

## Usage

1. **Switch Roles**: Use the role dropdown to switch between Viewer and Admin modes.
2. **View Dashboard**: See summary cards and charts for financial overview.
3. **Browse Transactions**: Use search and filter to find specific transactions.
4. **Add Transactions** (Admin only): Click "Add Transaction" to add new entries.
5. **Check Insights**: View key financial metrics and patterns.

## Approach

This dashboard was built following a component-based architecture with React. State is managed globally using Context API for simplicity and scalability. Tailwind CSS provides responsive and clean styling. Charts are implemented with Recharts for interactive data visualization. The app handles role-based permissions by conditionally rendering UI elements based on the selected role.

## Future Enhancements

- Dark mode toggle
- Edit/delete transactions
- Advanced filtering and sorting
- Export functionality
- Real API integration
