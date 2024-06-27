# Phonebook Application

This is a simple phonebook application built with Node.js, Express, and React. It allows users to view, add, and delete contacts.

## Live Demo

You can access the live application [here](https://mex-phonebook.onrender.com).

## Features

- View all contacts
- View individual contact details
- Add a new contact
- Delete a contact
- View the number of contacts and current date/time on the info page

## Setup

To run this application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- npm (Node package manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Mohammed-Mohad/Full_Stack_Open.git
    ```
2. Navigate to the `part3/phonebook` directory:
    ```sh
    cd Full_Stack_Open/part3/phonebook
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Build the React frontend:
    ```sh
    npm run build
    ```

### Running the Application

1. Start the server:
    ```sh
    npm run dev
    ```
2. The application will be running on `http://localhost:3001`.

### API Endpoints

- **GET** `/api/persons`: Retrieve all contacts
- **GET** `/api/persons/:id`: Retrieve a contact by ID
- **POST** `/api/persons`: Add a new contact
    - Request body:
      ```json
      {
        "name": "New Name",
        "number": "123-456-7890"
      }
      ```
- **DELETE** `/api/persons/:id`: Delete a contact by ID
- **GET** `/info`: View the number of contacts and current date/time

## Logging

The application uses `morgan` for logging HTTP requests. Each request log includes the HTTP method, URL, status, response time, and request body.

## CORS

The application uses `cors` to allow cross-origin requests.

## Static Files

The React frontend build is served as static files from the `dist` directory.

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

This project is licensed under the MIT License.
