# 🌤 BBQ Weather

BBQ Weather is a weather-focused web application designed to help users determine optimal BBQ days based on real-time and forecasted weather data from the OpenWeather API. It is built as an Nx monorepo for scalability and maintainability.

This document outlines the current architecture, dependencies, and future development plans for scaling and monetizing the application.
![Screenshot 2025-05-13 at 12 08 07 PM](https://github.com/user-attachments/assets/44b49134-b297-4b0a-94eb-f55e2c3012da)

## Table of Contents

- [Features](#features)
- [MVP Functionality](#mvp-functionality)
- [Current Limitations](#current-limitations)
- [Getting Started](#-getting-started-local-development)
- [Environment Variables](#environment-variables)
- [Clone the repo](#clone-the-repo)
- [Install Dependencies](#1-install-dependencies)
- [Run Backend API](#2-run-the-backend-api)
- [Swagger API Docs](#3-swagger-api-docs)
- [Run Frontend App](#4-run-the-frontend-app)
- [Build Production](#5-build-for-production)
- [Tests](#6-run-tests)
- [Future Plans](#-future-plans)
- [Scaling the App](#1-scaling-the-application)
- [User Management & Paywall](#2--user-management--paywall)
- [Useful links](#useful-links)

## 🚀 Features

- **BBQ Suitability Forecast**  
  Provides real-time and forecasted weather data tailored to BBQ planning.

- **Modular Frontend Architecture**  
  Built with **React** for clean, maintainable, and component-based UI development.

- **Utility-First Styling**  
  Styled with **Tailwind CSS** for fast, responsive design using utility classes.

- **Dynamic UI Components**  
  Uses **shadcn/ui** for flexible and accessible UI components built on top of Radix UI.

- **Robust Backend API**  
  Powered by **NestJS**, offering a scalable and type-safe backend built with Node.js and TypeScript.

- **Full Testing Coverage**  
  Uses **Jest** for unit and integration tests across both frontend and backend codebases.

- **Continuous Integration**  
  Automated testing and build pipelines configured via **GitHub Actions** for consistent CI/CD.
  ![Screenshot 2025-05-13 at 12 35 16 PM](https://github.com/user-attachments/assets/ad922b46-0bba-452f-9d24-a85294e1ae0f)
  ![Screenshot 2025-05-13 at 12 36 38 PM](https://github.com/user-attachments/assets/78b07b6f-2559-418d-9e12-888e09aa00ba)

- **Nx Monorepo**  
  Managed with **Nx** to organize code, share libraries, and streamline development across multiple apps and libraries.

## MVP Functionality
- Display current weather for a city that the user enters.

- Provide BBQ suitability based on temperature (in the future include a rating based on temp, precipitation and cloud cover).

- Basic responsive UI built with modern frontend frameworks inside the Nx monorepo.

- Single OpenWeather API key (free-tier).

- No authentication required.

- Static hosting/development environment.

- Test configuration is set up but more tests need to be created for full jest and e2e test coverage.

## Current Limitations
- API Rate Limits: The free-tier OpenWeather API has strict limits. Exceeding usage may result in throttling or downtime.

- No User Accounts: All users access the same experience; no personalization or session persistence.

- No Monetization: No paid features or payment infrastructure implemented.

- Limited Deployment: Not currently set up for dynamic scaling of traffic to the site.

## 🚧 Getting Started (Local Development)

Follow these steps to get BBQ Weather running locally in a development environment.

### Clone the repo:
```bash
git clone git@github.com:TomaraPetty/bbq-weather.git
```

### 🔐 Environment Variables

To run the application locally, you'll need to set up the required environment variables.

Create a `.env` file in the root of the project (and/or in `apps/api` if your API reads from local `.env` files) with the following:

```env
OPENWEATHER_API_KEY='your-api-key'
```

This can also be found in the `env.example`.

🌦️ This key is required to fetch weather data from the OpenWeather API. You can get one by signing up at https://openweathermap.org/api.

**Notes**
The backend (NestJS) uses dotenv to load variables automatically on startup.

Avoid committing .env files to version control. Be sure to add .env to your .gitignore.


### 1. **Install Dependencies**

From the project root, run the following to install all dependencies across the monorepo.
```bash
npm install
```

### 2. **Run the Backend API:**

Navigate to the API directory and start the NestJS server:
```
cd api
npm run start
```
The API will be available at: [http://localhost:5232](http://localhost:5232).

Example forecast route: http://localhost:5232/api/weather/forecast?city=Portland

### 3. **Swagger API Docs**
While the API is running you can also find Swagger documentation about the endpoint:
http://localhost:5232/api/#/Weather/WeatherController_getForecast
![Screenshot 2025-05-13 at 12 34 26 PM](https://github.com/user-attachments/assets/9aff92a4-683c-4c37-aabe-2afced169dca)

### 4. **Run the Frontend App**
In a new terminal, start the client app:
```
cd apps/bbq_weather
npm run dev
```
The client will be available at: [http://localhost:3000](http://localhost:3000).

### 5. **Build for production:**
To build the frontend app using Nx:
```
npx nx build bbq_weather
```

### 6. **Run tests:**
To run Jest tests for frontend or backend:
Backend (NestJS API):
```
cd apps/api
npm run test
```
Frontend (React App):
```
cd apps/bbq_weather
npm run test
```

## 🚀 Future Plans

### 1. Scaling the Application

- **OpenWeather Paid Plan**  
  Upgrade to a commercial OpenWeather plan to support increased API usage and additional features.

- **Vercel Hosting**  
  Deploy the app to [Vercel](https://vercel.com) for:
  - Automatic scaling
  - Global CDN
  - Fast, serverless deployments

- **Monitoring & Logging**  
  Integrate tools such as:
  - [Sentry](https://sentry.io) for error monitoring  
  - [LogRocket](https://logrocket.com) for session replay  
  - [Datadog](https://www.datadoghq.com) for performance tracking

---

### 2. 🔐 User Management & Paywall

#### Authentication

- Integrate third-party authentication with Auth0, Firebase, or NextAuth
- Support user sessions with full login/signup flow

#### User Portal

- Users can manage:
  - Account settings  
  - Subscription status  
  - Personalized BBQ weather alerts

#### Payment Gateway

- Implement [Stripe](https://stripe.com) for handling subscriptions
- Gate premium features such as:
  - Extended forecasts with adjustable range (7–30+ days)
  - Dashboard with optimal BBQ destinations
  - BBQ recommendation engine powered by machine learning
  - More forecast details (clouds, wind, etc.)
  - Saved search history
  - Custom alerts
  - Historical weather data

---

If you have any issues, open an issue or email: tomara.petty@gmail.com.


## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/next?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

