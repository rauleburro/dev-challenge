# TheXPlace code challenge: Execution Instructions

Welcome to the Challenge project! This repository contains the source code for the frontend (React) and backend (Node.js) of a challenge. Below are the steps to run the project using Docker Compose.

## Prerequisites

Before you begin, make sure you have the following components installed on your system:

1. [Docker](https://www.docker.com/get-started): Ensure Docker is installed and running on your machine.

## Steps to Run the Project

Follow these steps to run the frontend and backend project using Docker Compose:

1. **Clone the Repository:**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone <repository_URL>
   ```

2. **Navigate to Project Directory:**

   Navigate to the cloned project directory:

   ```bash
   cd challenge-frontend-backend
   ```

3. **Build and Run with Docker Compose:**

   Run the following command to build and run the Docker containers using Docker Compose:

   ```bash
   docker compose up -d --build
   ```

   This will build the Docker images and run the containers in the background.

4. **Access the Application:**

   Once the containers are up and running, you can access the frontend application through your web browser at `http://localhost:3000`.

5. **Stop and Remove Containers:**

   To stop and remove the created containers, execute:

   ```bash
   docker-compose down
   ```

   This will stop and remove the containers, but it won't delete the Docker images or volumes.

## Additional Notes

- Ensure that the ports used in the project (e.g., port 3000 for the frontend and port 4000 for the backend) are not being used by other services on your machine.
- If you want to make changes to the code, the containers should automatically reflect those changes after saving the corresponding files.

You're all set! You should now have the frontend and backend project running in Docker containers. If you encounter any issues, make sure to check the log messages and possible solutions in the repository. Enjoy exploring the Challenge project!