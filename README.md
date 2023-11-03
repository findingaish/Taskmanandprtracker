# Task-Management-and-Progress-Tracker

Task Progress Tracker is a web application that allows users to create, manage, and track tasks. This README provides an overview of the project, instructions for setting it up and running it, references/resources, and code documentation.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Endpoints](#endpoints)
4. [Data Visualizations](#data-visualizations)
5. [Frontend and Backend Choices](#frontend-and-backend-choices)
6. [Database](#database)
7. [References and Resources](#references-and-resources)
8. [Code Documentation](#code-documentation)
9. [Running Tests](#running-tests)

## Project Overview

The Task Progress Tracker is a web application designed to help users manage and track their tasks. It consists of two screens:

**Screen 1: Task Creation and Management**

In this screen, users can create and manage tasks. They can provide the following information for each task:
- Task Title
- Task Description
- Priority (Low, Medium, High)
- Due Date
- Status (To-Do, In Progress, Completed)

Backend Requirements:

- **Create Task** (POST /api/tasks): Create a new task with details.
- **Get All Tasks** (GET /api/tasks): Retrieve a list of all tasks.
- **Get Task by ID** (GET /api/tasks/:id): Retrieve a specific task by its unique identifier.
- **Update Task Status** (PATCH /api/tasks/:id/status): Update the status of a specific task.

**Screen 2: Task Progress Tracker**

In this screen, users can track their task progress. It includes:
- A table listing all tasks with Task Title, Priority, Due Date, and Status.
- Task filters for displaying tasks based on their status.
- Task count summary for each status.

Data Visualizations:

- **Task Completion Progress Chart**: A chart (Bar Chart or Line Chart) displaying the progress of tasks over time.
- **Task Priority Distribution Pie Chart**: A Pie Chart showing the distribution of tasks by priority.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- A preferred relational database (MySQL, PostgreSQL) is installed and configured.

### Installation

1. Clone the repository:
   git clone https://github.com/your-repo-url.git

2. Install backend dependencies
3. Set up your database and configure the connection in server.js.
4. Install frontend dependencies
5. Start the backend and frontend servers:
# Inside the 'backend' directory
npm start

# Inside the 'frontend' directory
npm start
6. Access the application at http://localhost:3000 (or the specified port).

## Endpoints
Create Task (POST /api/tasks)
Get All Tasks (GET /api/tasks)
Get Task by ID (GET /api/tasks/:id)
Update Task Status (PATCH /api/tasks/:id/status)
For detailed API documentation, refer to the code or documentation.

## Data Visualizations
The project includes two data visualizations:

Task Completion Progress Chart: A chart displaying the progress of tasks over time.

Task Priority Distribution Pie Chart: A Pie Chart showing the distribution of tasks by priority.

Frontend and Backend Choices
Frontend Library: [Link Text][https://react.dev/]
Backend Technology: Node.js with Express.js
Database: Your choice of RDBMS (MySQL, PostgreSQL)
Database
You have the flexibility to select any RDBMS for storing task data. Make sure to set up and configure your database before running the application.

References and Resources
React Documentation
Node.js Documentation
Express.js Documentation
MySQL Documentation
Code Documentation
For code documentation, you can refer to the inline comments in the project source code.

Running Tests
Instructions for running tests should be provided here if you have implemented tests for your project.


