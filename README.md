# Task Management App

A simple Task Management application built using **Express.js** for the backend and **React** for the frontend. The application allows users to manage tasks, including creating, updating, and deleting tasks. It connects to a MongoDB database to store task data and associate tasks with users.

## Demo Video

Watch the demo video of the Task Management App:

[![Task Management Demo](https://drive.google.com/file/d/189fa1iBRxcFoNGLI6FUoxv2vFIJmgIsZ/view?usp=sharing)

## Features

- **Create Tasks**: Users can add new tasks with titles and descriptions.
- **Update Tasks**: Users can update existing tasks.
- **Delete Tasks**: Users can delete tasks.
- **Get Tasks**: Users can view their tasks by user ID.

## Tech Stack

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (for interacting with MongoDB)

- **Frontend**:
  - React.js
  - Axios (for API calls)

## API Endpoints

### 1. **Create Task**
   - **URL**: `/api/v2/addTask`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "title": "Task Title",
       "description": "Task Description",
       "id": "User ID"
     }
     ```
   - **Success Response**:
     - **Status Code**: 200
     - **Body**:
       ```json
       {
         "todo": {
           "_id": "Task ID",
           "title": "Task Title",
           "description": "Task Description",
           "user": "User ID"
         }
       }
       ```

### 2. **Update Task**
   - **URL**: `/api/v2/updateTask/:id`
   - **Method**: `PUT`
   - **Request Body**:
     ```json
     {
       "title": "Updated Task Title",
       "description": "Updated Task Description"
     }
     ```
   - **Success Response**:
     - **Status Code**: 200
     - **Body**:
       ```json
       {
         "message": "Task updated successfully",
         "taskToUpdate": {
           "_id": "Task ID",
           "title": "Updated Task Title",
           "description": "Updated Task Description"
         }
       }
       ```

### 3. **Delete Task**
   - **URL**: `/api/v2/deleteTask/:id`
   - **Method**: `DELETE`
   - **Request Body**:
     ```json
     {
       "userId": "User ID"
     }
     ```
   - **Success Response**:
     - **Status Code**: 200
     - **Body**:
       ```json
       {
         "message": "Task deleted"
       }
       ```

### 4. **Get Tasks by User ID**
   - **URL**: `/api/v2/getTask/:id`
   - **Method**: `GET`
   - **Success Response**:
     - **Status Code**: 200
     - **Body**:
       ```json
       {
         "todos": [
           {
             "_id": "Task ID",
             "title": "Task Title",
             "description": "Task Description",
             "user": "User ID"
           },
           ...
         ]
       }
       ```

### 5. **Get Single Task by ID**
   - **URL**: `/api/v2/getSingleTask/:id`
   - **Method**: `GET`
   - **Success Response**:
     - **Status Code**: 200
     - **Body**:
       ```json
       {
         "todo": {
           "_id": "Task ID",
           "title": "Task Title",
           "description": "Task Description",
           "user": "User ID"
         }
       }
       ```

## Frontend Setup (React)

### 1. Install Dependencies
In the frontend directory, run:
```bash
npm install
```

### 2. Start the React Application 
```
npm run dev
```
This will start the React app on http://localhost:5173.

## Backend Setup (Express)

### 1. Install Dependencies
In the backend directory, run:
```bash
npm install
```

### 2. Start the Express Server
```bash
npm run dev
```
This will start the Express server on http://localhost:3000.

Follow .env.example file for MongoDB URL and other credentials.

### Contributing
If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


### Key Sections Explained:
1. **Features**: Highlights the main functionalities of the app.
2. **Tech Stack**: Lists the technologies used.
3. **API Endpoints**: Details the available routes for the backend.
4. **Frontend & Backend Setup**: Instructions on how to set up and start both the frontend and backend.
5. **Database Setup**: Instructions on configuring MongoDB.
6. **Project Structure**: Shows the structure of the project for easier navigation.

Feel free to adjust or expand the README based on additional features or project-specific information!



