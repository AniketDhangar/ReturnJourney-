# Return Journey - Frontend Task

This is a frontend task for The Return Journey, built using React, Vite, Redux, and Axios. The application fetches product data from the DummyJSON API, implements a search filter, and displays the filtered results.

## Features

- **Search Filter**: Users can filter the list of products fetched from the DummyJSON API.
- **Redux Integration**: The app uses Redux for state management.
- **Axios for API Calls**: Axios is used to fetch product data from the API.
- **Vite for Fast Development**: The project is built with Vite for fast builds and better development experience.

## Tech Stack

- React
- Redux
- Axios
- Vite
- TailwindCSS (optional)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AniketDhangar/ReturnJourney-.git
    ```

2. Navigate into the project directory:

    ```bash
    cd ReturnJourney-
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the App

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and go to `http://localhost:5173` to view the app.

### API Integration

The application fetches product data from the DummyJSON API using Axios.

- **API Endpoint**: `https://dummyjson.com/products`

### Error Handling

The app includes error handling for API calls to ensure a smooth user experience. If the API fails, an appropriate message is displayed to the user.
