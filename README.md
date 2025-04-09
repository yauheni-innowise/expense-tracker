# Monthly Expense Tracker

A web application to calculate the main indicators of monthly expenses based on a user's list of expenses.

## Features

- Add new expenses with category and amount
- See list of all expenses with the ability to remove items
- Calculate total amount of expenses
- Calculate average daily expense (based on 30-day month)
- View top 3 largest expenses
- Aggregation of expenses with the same category (case-insensitive)

## Technologies Used

- React
- Vite
- SCSS for styling
- React Hooks for state management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repository

   ```
   git clone <repository-url>
   cd expense-tracker
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173 or http://localhost:5174)

## Usage

1. Add expenses using the form at the top of the page
2. View all expenses in the table below
3. Click the "Calculate" button to see:
   - Total expenses
   - Average daily expense
   - Top 3 largest expenses

## Build for Production

To build the application for production:

```
npm run build
```

This will create a `dist` folder with optimized production files.

## License

MIT
