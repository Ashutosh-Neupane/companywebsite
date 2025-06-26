# DOTSANDDASHES

**DOTSANDDASHES** is a modern, scalable web application built using **Next.js** and **TypeScript**. It follows a modular architecture to ensure clean code, easy maintenance, and optimal performance. The project includes key features like a blog system, contact form, and reusable UI components.

---

## 🚀 Tech Stack

This project utilizes a robust stack of modern web technologies:

* **Next.js** – React-based framework for server-side rendering, routing, and API routes.
* **TypeScript** – Provides static typing to catch errors early and improve code maintainability.
* **Tailwind CSS** – Utility-first CSS framework (if integrated) for fast UI styling.
* **React Query / Context API** – For efficient state and data management (depending on implementation).
* **API Routes** – Built-in Next.js API support for handling server-side logic like form submissions.

---

## 📁 Project Structure

A modular structure that separates logic, presentation, and data concerns:

```
src/
├── api/                     # Backend-like API endpoints for server-side actions (e.g., blog, contact form)
│   ├── blog.ts              # Blog-related API logic
│   └── contact/            
│       └── SubmitContactForm.ts  # Handles contact form submission
│
├── app/                     # Pages using the App Router (introduced in Next.js 13+)
│   ├── about/               # About page with app/about routing
│   ├── blog/                # Blog listing or detail page (app/blog)
│   └── contact/             # Contact page with form
│
├── components/              # Reusable presentational components
├── features/                # Higher-level UI features and logic
├── lib/                     # Utility functions and client helpers (e.g., HTTP wrapper)
├── sections/                # Page-specific sections like hero banners, blog listings
│   ├── blogs/               # Blog section UI
│   └── contact/             # Contact section UI
│
├── types/                   # Centralized TypeScript interfaces and types
├── assets/                  # Static resources like images, SVGs, icons
```

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dotsanddashes.git
cd dotsanddashes
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and set the necessary variables:

```env
NEXT_PUBLIC_API_ENDPOINT=https://your-api-endpoint.com
```

This URL is used in API calls (e.g., for blogs or contact form submissions).

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Your application will start on [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

| Command | Purpose                                      |
| ------- | -------------------------------------------- |
| `dev`   | Launches development mode with hot reloading |
| `build` | Compiles the app for production              |
| `start` | Runs the built version of the app            |
| `lint`  | Runs lint checks using ESLint                |

---

## ✉️ Contact Form

The contact form is implemented using a custom API route (`SubmitContactForm.ts`) and accessed using a custom mutation hook (`useContactMutation.ts`).

* Users submit the form via the `/api/contact/SubmitContactForm` endpoint.
* The server processes the data and optionally sends an email or saves it to a database.

Client code and API route are modular and easily extendable.

---

## 📰 Blog System

A dynamic blog system is structured as follows:

* **API Layer**: `src/api/blog.ts` fetches and manages blog data from an external or internal source.
* **Page Layer**: `src/app/blog/blog.tsx` renders the blog page using fetched data.
* **Section Layer**: `src/sections/blogs/` contains reusable blog listing UI components.

This architecture separates concerns and keeps logic organized.

---

## 📚 Type Definitions

All shared interfaces and types are located in `src/types/` for strong typing and reusability across the codebase.

Example types:

* `Blog.ts`: For blog post data
* `ContactUsFormType.ts`: For contact form submissions

---

## 🖥 Deployment

This project can be deployed on any platform supporting Node.js. Popular options include:

* [Vercel](https://vercel.com/) (recommended for Next.js)
* Netlify
* AWS, DigitalOcean, etc.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

Special thanks to the open-source community and the Next.js team for creating an amazing development experience. Built with ❤️ to demonstrate clean architecture and scalability in web applications.
