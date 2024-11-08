# Task Management App

This is a Task Management web application built with React. It allows users to create, edit, and delete tasks, with a clean and responsive UI. The app utilizes Shadcn for UI components, Jotai for state management, and is structured for easy maintenance and scalability follow React Bulletproof architecture and folder structuring (with extra layer for data model).

## Project Structure

- **`/app`**: Entry point for the application, managing routes and pages.
- **`/component/`**: Contains UI components. We use Shadcn for reusable UI elements such as buttons and forms.
- **`/configs`**: Data models such as the `Task` entity, which includes properties like `id`, `name`.
- **`/features`**: The controller for task data. This folder contains logic for creating, editing, and deleting tasks.
- **`/entities`**: Data models such as the `Task` entity, which includes properties like `id`, `name`.
- **`/libs`**: Stores reusable helper function.
- **`/stores`**: Manages the app's state using Jotai. It defines atoms to manage the global state of the app.

## Features

- **Create Task**: Allows users to add new tasks.
- **Edit Task**: Users can edit existing tasks.
- **Delete Task**: Each task has a delete button to remove it from the list.
- **Responsive Design**: The app works across different screen sizes, ensuring a consistent experience on both web and mobile.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For development server
- **Shadcn**: For UI components such as buttons, forms, etc.
- **Jotai**: For state management.
- **TailwindCSS**: For styling, including responsiveness.
- **Vercel**: For deployment
