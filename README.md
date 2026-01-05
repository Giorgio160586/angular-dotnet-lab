<div align="center">
  <h1>Angular Frontend & ASP.NET Core Web API</h1>
  <em>A modern full-stack architecture for scalable web applications</em>
</div>

<div align="center">
  <img width="700" title="Logo" alt="Logo" src="./frontend/public/angular-dotnet-lab.svg" />
</div>

<p align="center">
  <a href="#about">About</a> &nbsp;|&nbsp;
  <a href="#architecture">Architecture</a> &nbsp;|&nbsp;
  <a href="#technologies">Technologies</a> &nbsp;|&nbsp;
  <a href="#Starting">Starting</a>
</p>

---

### About ###

> This repository provides a modern full-stack architecture for scalable web applications, combining an Angular 21 frontend with Tailwind CSS for styling and PrimeNG for components, tested using Vitest. The backend is built with ASP.NET Core Minimal APIs on .NET 10, following a Vertical Slice Architecture, while API documentation and testing are powered by Scalar. Secure communication between frontend and backend is implemented through JWT (JSON Web Token), ensuring robust authentication and authorization. This approach delivers a clean, modular, and high-performance solution, making it a robust foundation for modern, high-performance web solutions.

---

### Architecture ###

#### Frontend - Angular ####
  - **Tailwind CSS** – Utility-first CSS framework for responsive and customizable UI.
  
  - [PrimeNG - Angular UI Component Library](https://primeng.org/) The Next-Gen UI Suite for Angular. Enhance your web applications with PrimeNG's comprehensive suite of customizable, feature-rich UI components.
  
  - [Vitest | Next Generation testing framework](https://vitest.dev/) – Vitest is the new default testing framework for Angular, designed to be fast, modern, and TypeScript-friendly. It leverages Vite for ultra-fast builds and offers a Jest-like API for familiarity.

<table align="center" style="border-collapse: separate; border: 0px;  border-spacing: 10px;">
  <tr>
    <td style="background-color: rgba(0,0,0,0.10); border: 0px solid padding: 10px; text-align: center;">
      <em>Vitest Web UI</em><br/>
      <a href="./frontend/public/vitest.png">
        <img src="./frontend/public/vitest.png" alt="Vitest Web UI" style="width: 420px; height: auto;" />
      </a>
    </td>
    <td style="background-color: rgba(0,0,0,0.10); border: 0px solid padding: 10px; text-align: center;">
      <em>Vitest console</em><br/>
      <a href="./frontend/public/vitest-2.png">
        <img src="./frontend/public/vitest-2.png" alt="Vitest console" style="width: 420px; height: auto;" />
      </a>
    </td>
  </tr>
</table>

  - [HttpInterceptor](frontend/src/app/core/interceptors/http.interceptor.service.ts) – Angular service that globally intercepts HTTP requests and responses to modify them (e.g., add headers, change URLs) or handle errors before they reach the app or server.

  - [Zod](https://zod.dev/) - Zod is a TypeScript-first schema validation library. It   allows you to define schemas for your data and validate objects against those schemas at runtime.
    I used Zod to validate communication between the Backend and Frontend. This means:

    - When the backend sends a response, you validate it against a Zod schema to ensure it matches the expected structure.
    - When sending data to the backend, you validate the payload before making the request.

<table align="center" style="border-collapse: separate; border: 0px; border-spacing: 10px;">
  <tr>
    <td style="background-color: rgba(0,0,0,0.10); border: 0px solid padding: 10px; text-align: center;">
      <em>If validation fails, a toast message is displayed.</em><br/>
      <a href="./frontend/src/app/core/exception-handler/exception-handler.service.spec.ts">
        <img src="./frontend/public/ZOD.png" alt="Zod" style="height: auto;" />
      </a>
    </td>
  </tr>
</table>

---
#### Backend - WebApi C# ####
  - [Scalar](https://scalar.com/) – Scalar is a modern, open-source developer experience platform designed to streamline API documentation and testing, offering an intuitive interface, advanced features, and improved usability compared to traditional tools like Swagger, making it ideal for creating, exploring, and managing APIs efficiently.

<table align="center" style="border-collapse: separate; border: 0px; border-spacing: 10px; ">
  <tr>
    <td style="background-color: rgba(0,0,0,0.10); border: 0px solid padding: 10px; text-align: center; min-width: 440px;">
      <em>Scalar</em><br/>
      <a href="./frontend/public/scalar.png">
        <img src="./frontend/public/scalar.png" alt="Scalar" style="width: 420px; height: auto;" />
      </a>
    </td>
  </tr>
</table>

---

### Technologies ###

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

### Starting ###

#### Frontend ####

```bash
npm i
npm run vitest:ui
npm start
```
---

#### Backend ####

```bash
dotnet build
dotnet run
```
