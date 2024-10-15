# Vite React TypeScript Project

A fast and scalable React application using Vite and TypeScript.

## Features

- ⚡ Vite for fast development
- 🚀 React for building UIs
- 🛠 TypeScript for static typing

## Getting Started

### Prerequisites

- **Node.js** (14+), **npm** or **yarn**

### Installation

```bash
git clone https://github.com/sarpita/solvative-search-places-app.git
cd solvative-search-places-app
npm install  # or yarn
npm run dev  # or yarn dev

## Project Structure

src/
├── components/       # Reusable components
├── hooks/            # Custom hooks
├── services/         # API services
├── styles/           # CSS modules and global styles
├── App.tsx           # Main application
├── main.tsx          # Entry point

## Environment Variables
Add variables in .env (use VITE_ prefix):

VITE_API_KEY= "0fa5ce45f7mshe0837563684a175p118080jsn04861a21abb9"
VITE_API_URL="https://wft-geo-db.p.rapidapi.com/v1/geo/cities"