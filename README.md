# Angular Frontend & ASP.NET Core Web API

This repository contains two main projects:

- **Frontend**: Angular application for the user interface.
- **Backend**: ASP.NET Core Web API for business logic and data access.

---

<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
  <!-- Background with white fill and gray border -->
  <rect x="10" y="10" width="1180" height="680" rx="24" ry="24"
        fill="#ffffff" stroke="#cfd8dc" stroke-width="4"/>

  <!-- Title -->
  <text x="600" y="70" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif"
        font-size="36" font-weight="600" fill="#37474f">Technologies Overview</text>

  <!-- Column headers -->
  <rect x="120" y="110" width="420" height="70" rx="14" fill="#eceff1" stroke="#b0bec5"/>
  <text x="330" y="157" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#263238">Frontend</text>

  <rect x="660" y="110" width="420" height="70" rx="14" fill="#eceff1" stroke="#b0bec5"/>
  <text x="870" y="157" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#263238">Backend</text>

  <!-- Frontend boxes -->
  <g font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#263238">
    <rect x="120" y="210" width="420" height="90" rx="12" fill="#f7f9fa" stroke="#b0bec5"/>
    <text x="150" y="265">Angular 21</text>

    <rect x="120" y="315" width="420" height="90" rx="12" fill="#f7f9fa" stroke="#b0bec5"/>
    <text x="150" y="370">PrimeNG 21</text>

    <rect x="120" y="420" width="420" height="90" rx="12" fill="#f7f9fa" stroke="#b0bec5"/>
    <text x="150" y="475">Tailwind CSS</text>
  </g>

  <!-- Backend boxes -->
  <g font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#263238">
    <rect x="660" y="210" width="420" height="90" rx="12" fill="#f7f9fa" stroke="#b0bec5"/>
    <text x="690" y="265">.NET 10</text>

    <rect x="660" y="315" width="420" height="90" rx="12" fill="#f7f9fa" stroke="#b0bec5"/>
    <text x="690" y="370">Minimal APIs</text>

    <rect x="660" y="420" width="420" height="90" rx="12" fill="#f7f9fa" stroke="#b0bec5"/>
    <text x="690" y="475">JWT Authentication</text>
  </g>
</svg>
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
