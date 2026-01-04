<div align="center">
  <h1>Angular Frontend & ASP.NET Core Web API</h1>
  <em>A modern full-stack architecture for scalable web applications</em>
</div>

<div align="center">
  <img width="700" title="Logo" alt="Logo" src="./frontend/public/angular-dotnet-lab.svg">
</div>

<p align="center">
  <a href="#about">About</a> &nbsp;|&nbsp;
  <a href="#architecture">Architecture</a> &nbsp;|&nbsp;
  <a href="#technologies">Technologies</a> &nbsp;|&nbsp;
  <a href="#Starting">Starting</a>
</p>

---

## About ##

This repository provides a modern full-stack architecture for scalable web applications, combining an Angular 21 frontend with Tailwind CSS for styling and PrimeNG for rich UI components, tested using Vitest for speed and reliability. The backend is built with ASP.NET Core Minimal APIs on .NET 10, following a Vertical Slice Architecture to keep features self-contained and maintainable, while API documentation and testing are powered by Scalar. Secure communication between frontend and backend is implemented through JWT (JSON Web Token), ensuring robust authentication and authorization. This approach delivers a clean, modular, and high-performance solution, making it a robust foundation for modern, high-performance web solutions.

---

## Architecture ##

### Frontend (Angular 21) ###
  - **Tailwind CSS** – Utility-first CSS framework for responsive and customizable UI.
  - **PrimeNG** – Rich set of UI components for Angular.
  - **Vitest** – Fast and lightweight testing framework for unit tests.
  - **[HttpInterceptor](frontend/src/app/core/interceptors/http.interceptor.service.ts)* – Angular service that globally intercepts HTTP requests and responses to modify them (e.g., add headers, change URLs) or handle errors before they reach the app or server..

### Backend (ASP.NET - Minimal API) ###
  - **Scalar** – Tool for API documentation and testing, similar to Swagger but with enhanced features.

---

## Technologies ##

<a href="https://angular.dev">
  <img width="50" title="Angular" alt="Angular Logo" src="./frontend/public/angular-icon.svg">
</a> &nbsp;&nbsp;
<a href="https://dotnet.microsoft.com">
  <img width="50" title=".NET Core" alt=".NET Logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg">
</a> &nbsp;&nbsp;
<a href="https://tailwindcss.com">
  <img width="50" title="Tailwind CSS" alt="Tailwind Logo" src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png">
</a> &nbsp;&nbsp;
<a href="https://vitest.dev">
  <img width="50" title="Vitest" alt="Vitest Logo" src="https://vitest.dev/logo.svg">
</a>
<a href="https://primeng.org">
  <img width="50" title="Vitest" alt="Vitest Logo" src="./frontend/public/primeng-original.svg">
</a>


---

## Starting ##

### Frontend (Angular 21)

```bash
npm i
ng test
npm start
```

### Backend (C# - WebApi minimal API - NET 10)

```bash
dotnet build
dotnet run
```
