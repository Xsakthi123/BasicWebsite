# Simple Business Website

A beginner-friendly business website with a React frontend and a Java Spring Boot contact API.

## Step 1: Project folder structure

```text
business-website/
|-- backend/
|   |-- pom.xml
|   |-- src/main/java/com/example/businesswebsite/
|   |   |-- BusinessWebsiteApplication.java
|   |   |-- ContactController.java
|   |   |-- ContactRequest.java
|   |   `-- ContactResponse.java
|   `-- src/main/resources/application.properties
|-- frontend/
|   |-- index.html
|   |-- package.json
|   `-- src/
|       |-- components/
|       |   |-- Footer.jsx
|       |   `-- Navbar.jsx
|       |-- pages/
|       |   |-- About.jsx
|       |   |-- Contact.jsx
|       |   |-- Home.jsx
|       |   `-- Services.jsx
|       |-- App.jsx
|       |-- main.jsx
|       `-- styles.css
`-- README.md
```

## Step 2: Home page

The home page introduces the business and links visitors to its services and contact form.

## Step 3: About page

The about page explains the business's values and approach.

## Step 4: Services page

The services page presents a few example offerings. Replace them with your own business details.

## Step 5: Contact page

The contact page has a form for a visitor's name, email, subject, and message. The browser checks required fields before submitting.

## Step 6: React routing

React Router maps `/`, `/about`, `/services`, and `/contact` to their pages. The shared navigation and footer stay in place as visitors move between pages.

## Step 7: Spring Boot backend

The backend exposes `POST /api/contact`. Spring validates submitted fields and returns an acknowledgement. This starter does **not** save messages or send email; add a database or email provider before using it to collect real customer enquiries.

`ContactRequest` defines the accepted fields and their validation rules. `ContactController` receives valid requests and returns a small JSON response. `ContactResponse` defines that response shape.

## Step 8: API integration

The contact form sends JSON to the Spring Boot API. By default, the frontend expects the API at `http://localhost:8080`. To use a different API address, create `frontend/.env` with:

```text
VITE_API_BASE_URL=http://localhost:8080
```

Restart the frontend after changing the environment file.

## Step 9: Run and test the application

### Requirements

- Node.js 18 or newer (includes npm)
- Java 17 or newer
- Maven 3.6 or newer

### Start the backend

In a terminal, from the project root:

```powershell
cd backend
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`.

To run the backend tests instead, use `mvn test` from the `backend` folder.

### Start the frontend

Open a second terminal at the project root:

```powershell
cd frontend
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`). Keep both terminals running to submit the form.

### Test the API directly

With the backend running, use PowerShell:

```powershell
$body = @{
    name = "Alex Example"
    email = "alex@example.com"
    subject = "Question about services"
    message = "I would like to learn more."
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:8080/api/contact -Method Post -ContentType "application/json" -Body $body
```

The response should confirm that the message was received. You can also test the complete flow by filling out the form in the browser.

To create a production frontend bundle, run `npm run build` from `frontend`.
