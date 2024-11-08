# To-do list App

This is a Task Management web application built with React. It allows users to create, edit, and delete tasks, with a clean and responsive UI. The app utilizes Shadcn for UI components, Jotai for state management, and is structured for easy maintenance and scalability follow React Bulletproof architecture and folder structuring (with extra layer for data model).

## Project Structure

- **`/app`**: Entry point for the application, managing routes and pages.
- **`/component/`**: Contains UI components. I use Shadcn for reusable UI elements such as buttons and forms.
- **`/config`**: Stores library and framework configuration. This includes configuration for third-party libraries, constants, or environment-specific settings.
- **`/features`**: The controller for task data. This folder contains logic for creating, editing, and deleting tasks.
- **`/entities`**: Data models such as the `Task` entity, which includes properties like `id`, `name`.
- **`/lib`**: Stores reusable helper function.
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

# Deploying the Web App on Vercel

1. Sign up or Log in Vercel with github account
2. Connect respository to vercel (on vercel dashboard)
3. After connected, vercel will create automatic deployment whenever there are changes in git repository.

## Improvement on deployment

For larger application need environment variable to store sensitive information and configuration settings (to change based on environment) and preview deployment before merging to main branch
