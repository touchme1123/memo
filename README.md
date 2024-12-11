# Full-Stack Web Application

SIMPLE BOARD - MEMO 기능이 있는 WEB APP

https://simplez-board.netlify.app/

## Tech Stack

### Backend
- **Java**: Version 17
- **Spring Boot**: Version 3.4.0
- **Spring Data JPA**: For database interaction
- **MariaDB**: Database for persistence
- **Lombok**: To reduce boilerplate code (like getters/setters)
- **JUnit**: For testing

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Router**: For client-side routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: For making HTTP requests
- **Jest**: For unit and integration testing
- **PostCSS**: For processing CSS with plugins (e.g., autoprefixer)
- **Autoprefixer**: For automatically adding vendor prefixes to CSS

---

## Features

### Backend Features:
- **RESTful API** for handling user requests.
- **JPA Integration** to interact with MariaDB for persistent storage.
- **Security** using Spring Boot's built-in security mechanisms (if implemented).

### Frontend Features:
- **Interactive UI** built with React, allowing dynamic updates without page reload.
- **Responsive Layout** using TailwindCSS to ensure compatibility across different screen sizes.
- **Add, Edit, Delete Operations** for managing calculations, backed by API calls to the backend.
- **Drag and Drop Interface** for interacting with elements dynamically.


## Installation Instructions

### Backend Setup (Spring Boot + MariaDB)

1. Clone the backend repository:
   ```bash
   git clone

2. Set up the MariaDB database connection:
  Open src/main/resources/application.properties and configure the following:
  spring.datasource.url=jdbc:mariadb://localhost:3306/your_db_name
  spring.datasource.username=your_db_user
  spring.datasource.password=your_db_password

3. Build and run the Spring Boot application:
  ./gradlew build
  ./gradlew bootRun

4. The backend will be accessible at http://localhost:8080.

### Frontend Setup (React + TailwindCSS)
1. Install the dependencies:
   npm install

2. Start the React development server:
   npm start
   
3. The frontend will be accessible at http://localhost:3000.
