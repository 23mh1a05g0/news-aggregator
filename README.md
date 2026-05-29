# High-Performance News Aggregator

A React-based News Aggregator application built using the HackerNews API. This project demonstrates real-world frontend performance engineering techniques by first creating an intentionally slow application and then systematically optimizing it using industry-standard tools and best practices.

---

## Project Overview

This application fetches and displays the top 500 stories from HackerNews and provides features such as searching, sorting, and article browsing.

The project focuses on improving Core Web Vitals and frontend performance through:

* Parallel API fetching
* List virtualization
* Code splitting
* Image optimization
* React rendering optimizations
* Bundle size reduction
* Docker containerization

---

## Features

### News Aggregation

* Fetches Top 500 HackerNews stories
* Displays:

  * Title
  * Score
  * Author
  * Publication Date
  * Original Article Link

### Search Functionality

* Real-time article filtering by title

### Sorting

* Sort articles by score

### Performance Optimizations

* Promise.all API fetching
* React.memo
* Intl.DateTimeFormat
* List virtualization
* Code splitting
* Bundle size optimization
* Optimized hero image

### Docker Support

* Dockerized application
* Docker Compose orchestration
* Healthcheck support

---

## Tech Stack

### Frontend

* React 19
* Vite
* JavaScript

### Performance Tools

* Lighthouse
* Chrome DevTools
* React Virtual

### Libraries

* Lodash
* @tanstack/react-virtual

### Containerization

* Docker
* Docker Compose

---

## Project Structure

```text
news-aggregator/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── article/
│   │   └── common/
│   │
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── Dockerfile
├── docker-compose.yml
├── PERFORMANCE.md
├── README.md
├── .env.example
├── stats.html
├── package.json
└── vite.config.js
```

---

## Architecture

```text
User
 │
 ▼
React Application
 │
 ▼
HackerNews API
 │
 ▼
Top Story IDs
 │
 ▼
Promise.all()
 │
 ▼
Story Details
 │
 ▼
Virtualized Rendering
 │
 ▼
User Interface
```

---

## Slow Version Implementation

A dedicated branch named:

```text
slow-version
```

contains the intentionally unoptimized version of the application.

### Implemented Anti-Patterns

* Sequential API requests
* Large hero image
* Full lodash import
* Expensive date calculations
* No virtualization
* Large DOM rendering
* Re-render-heavy filtering

---

## Optimization Techniques

### 1. Parallel Data Fetching

Before:

```javascript
for (const id of ids) {
  await fetchStoryById(id);
}
```

After:

```javascript
const stories = await Promise.all(
  ids.map(id => fetchStoryById(id))
);
```

Benefits:

* Reduced loading time
* Eliminated network waterfall

---

### 2. Bundle Size Optimization

Before:

```javascript
import _ from "lodash";
```

After:

```javascript
import sortBy from "lodash/sortBy";
```

Benefits:

* Smaller bundle size
* Faster JavaScript parsing

---

### 3. Date Formatting Optimization

Before:

```javascript
new Date().toLocaleString();
```

After:

```javascript
Intl.DateTimeFormat
```

Benefits:

* Reduced formatting overhead

---

### 4. React Memoization

Implemented:

```javascript
React.memo()
```

Benefits:

* Prevents unnecessary component re-renders

---

### 5. List Virtualization

Implemented using:

```text
@tanstack/react-virtual
```

Benefits:

* Reduced rendered DOM nodes
* Faster scrolling
* Lower memory usage

---

### 6. Code Splitting

Implemented using:

```javascript
React.lazy()
Suspense
```

Benefits:

* Multiple JavaScript chunks
* Reduced initial bundle size

---

### 7. Hero Image Optimization

Implemented:

* width
* height
* srcset
* responsive loading

Benefits:

* Improved LCP
* Reduced CLS
* Lower bandwidth consumption

---

## Core Web Vitals Focus

### Largest Contentful Paint (LCP)

Optimized using:

* Image optimization
* Smaller bundles
* Faster API loading

### Interaction to Next Paint (INP)

Optimized using:

* Virtualization
* React.memo
* Efficient rendering

### Cumulative Layout Shift (CLS)

Optimized using:

* Fixed image dimensions
* Stable layout rendering

---

## Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=https://hacker-news.firebaseio.com/v0
VITE_APP_NAME=News Aggregator
PORT=5173
```

Reference file:

```text
.env.example
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate

```bash
cd news-aggregator
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application:

```text
http://localhost:5173
```

---

## Docker Setup

### Build and Run

```bash
docker compose up --build
```

### Run in Background

```bash
docker compose up -d
```

### Stop Containers

```bash
docker compose down
```

---

## Production Build

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

## Performance Audit

Detailed audit results are available in:

```text
PERFORMANCE.md
```

Includes:

* Baseline measurements
* Optimization history
* Before/after comparisons
* Performance observations

---

## Bundle Analysis

Generated using:

```text
rollup-plugin-visualizer
```

Report:

```text
stats.html
```

---

## Assignment Requirements Checklist

### Core Requirements

* React Application
* HackerNews API Integration
* Search Functionality
* Sorting Functionality
* Hero Image
* Slow Version Branch
* Performance Report
* Docker Support
* Docker Compose
* Healthcheck
* Bundle Analysis
* Virtualized Rendering
* Code Splitting
* Optimized Image Delivery
* Environment Configuration

---

## Learning Outcomes

This project demonstrates practical experience with:

* React Development
* API Integration
* Frontend Performance Engineering
* Core Web Vitals
* Bundle Optimization
* Virtualization
* Code Splitting
* Docker Containerization
* Lighthouse Auditing
* Chrome DevTools Profiling

---

## Author

Developed as part of a frontend performance optimization project focused on modern React application architecture and Core Web Vitals improvement.
