<div align="center">
  <h1>Angular Frontend & ASP.NET Core Web API</h1>
  <em>A modern full-stack architecture for scalable web applications</em>
</div>

<p align="center">
  <a href="#about">About</a> &nbsp;|&nbsp;
  <a href="#architecture">Architecture</a> &nbsp;|&nbsp;
  <a href="#technologies">Technologies</a> &nbsp;|&nbsp;
  <a href="#starting">Starting</a>
</p>


---

## About ##

This repository contains two main projects:

- **Frontend**: Angular application for the user interface.
- **Backend**: ASP.NET Core Web API for business logic and data access.

---

## Architecture

The solution follows a **client-server architecture**:

- **Angular Frontend**  
  - Provides a responsive UI built with Angular 21 and Tailwind CSS.
  - Communicates with the backend via RESTful APIs.

- **ASP.NET Core Backend**  
  - Implements business logic and data access using minimal APIs.
  - Built on .NET 10 for high performance and scalability.


---

## Technologies ##

<a href="https://angular.dev">
  <img width="50" title="Angular" alt="Angular Logo" src="https://angular.io/assets/images/logos/angular/angular.svg">
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

---

## :starting: Starting ##

### Frontend (Angular 21)

```bash
ng test
npm start
```

### Backend (C# - WebApi minimal API - NET 10)

```bash

dotnet restore
dotnet build
dotnet run

```
