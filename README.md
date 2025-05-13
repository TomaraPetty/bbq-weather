# 🌤 BBQ Weather

BBQ Weather is a weather-focused web application designed to help users determine optimal BBQ days based on real-time and forecasted weather data from the OpenWeather API. It is built as an Nx monorepo for scalability and maintainability.

This document outlines the current architecture, dependencies, and future development plans for scaling and monetizing the application.

## 🚀 Features

- ** BBQ Suitability Forecast**  
  Provides real-time and forecasted weather data tailored to BBQ planning.

- ** Modular Frontend Architecture**  
  Built with **React** for clean, maintainable, and component-based UI development.

- ** Utility-First Styling**  
  Styled with **Tailwind CSS** for fast, responsive design using utility classes.

- ** Dynamic UI Components**  
  Uses **shadcn/ui** for flexible and accessible UI components built on top of Radix UI.

- ** Robust Backend API**  
  Powered by **NestJS**, offering a scalable and type-safe backend built with Node.js and TypeScript.

- ** Full Testing Coverage**  
  Uses **Jest** for unit and integration tests across both frontend and backend codebases.

- ** Continuous Integration**  
  Automated testing and build pipelines configured via **GitHub Actions** for consistent CI/CD.

- ** Nx Monorepo**  
  Managed with **Nx** to organize code, share libraries, and streamline development across multiple apps and libraries.

## MVP Functionality
- Display current weather for a city that the user enters.

- Provide BBQ suitability based on temperature (in the future include a rating based on temp, precipitation and cloud cover).

- Basic responsive UI built with modern frontend frameworks inside the Nx monorepo.

- Single OpenWeather API key (free-tier).

- No authentication required.

- Static hosting/development environment.


## Current Limitations
- API Rate Limits: The free-tier OpenWeather API has strict limits. Exceeding usage may result in throttling or downtime.

- No User Accounts: All users access the same experience; no personalization or session persistence.

- No Monetization: No paid features or payment infrastructure implemented.

- Limited Deployment: Not currently set up for dynamic scaling of traffic to the site.

## 🚧 Getting Started (Local Development)

Follow these steps to get BBQ Weather running locally in a development environment.

---

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
cd apps/api
npm run start
```
The API will be available at: [http://localhost:5232](http://localhost:5232).

### 3. **Run the Frontend App**
In a new terminal, start the client app:
```
cd apps/bbq_weather
npm run dev
```
The client will be available at: [http://localhost:3000](http://localhost:3000).

### 4. **Build for production:**
To build the frontend app using Nx:
   ```
   npx nx build bbq_weather
   ```

### 5. **Run tests:**
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

### 2. 👥 User Management & Paywall

#### 🔐 Authentication

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

# 

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/next?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/FdX4s6r7rf)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx dev bbq_weather
```

To create a production bundle:

```sh
npx nx build bbq_weather
```

To see all available targets to run for a project, run:

```sh
npx nx show project bbq_weather
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/next:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/next?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
