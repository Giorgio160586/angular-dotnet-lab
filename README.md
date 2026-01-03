# Monorepo: Angular Frontend & ASP.NET Core Web API

This repository contains two main projects:

- **Frontend**: Angular application for the user interface.
- **Backend**: ASP.NET Core Web API for business logic and data access.

---
 
## Getting Started

### Frontend (Angular)

```Shell
cd frontend
npm install
npm start

```

- Runs the Angular development server on **http://localhost:4200**.

### Backend (ASP.NET Core Web API)

```Shell
cd web-api
dotnet restore
dotnet run

```

- Runs the API on **http://localhost:5000** (or as configured in `launchSettings.json`).

---

## Features Overview

### Frontend

- Angular **Standalone Components** with modern routing.
- Organized by **features** (e.g., Products, Widgets).
- Tailwind CSS for styling.
- Interceptors and global exception handling.

### Backend

- ASP.NET Core Minimal API (or Controllers).
- Organized by **Features** (Products, Users).
- Token-based authentication provider.
- Configurable via `appsettings.json`.

---

## Tech Stack

- **Frontend**: Angular, TypeScript, Tailwind CSS, Vitest.
- **Backend**: ASP.NET Core 10
- **Build Tools**: Node.js, .NET SDK.


## FrontendLab

This project was generated using https://github.com/angular/angular-cli version 21.0.4.

### Development server

To start a local development server, run:

```Shell
ng serve

```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```Shell
ng generate component component-name

```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```Shell
ng generate --help

```

### Building

To build the project run:

```Shell
ng build

```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the https://vitest.dev/ test runner, use the following command:

```Shell
ng test

```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```Shell
ng e2e

```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the https://angular.dev/tools/cli page.

---

### Folder Structure Principles

- Each **feature** contains everything it needs (pages, components, services, state, routing).
- `core/` hosts singleton services, interceptors, and guards for cross-cutting concerns.
- `shared/` contains reusable UI components and utilities without business logic dependencies.
- Lazy loading for features and standalone components everywhere (no `NgModule`).
