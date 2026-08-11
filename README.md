# Portfolio Template & Architecture Blueprint

This repository contains a modular portfolio web template and content schema built directly from your requested structural specification.

---

## 📐 Portfolio Tree Structure

```text
Portfolio
│
├── Hero
│   ├── Name
│   ├── Professional title
│   ├── Short introduction
│   ├── Profile image
│   └── CV
│
├── About
│
├── Education
│   ├── Institution
│   ├── Degree
│   ├── Field
│   └── Dates
│
├── Experience
│   ├── Company
│   ├── Position
│   ├── Description
│   └── Dates
│
├── Projects
│   ├── Title
│   ├── Description
│   ├── Technologies
│   ├── Image
│   ├── GitHub
│   └── Demo
│
├── Skills
│
├── Certifications
│
└── Contact
    ├── Email
    ├── LinkedIn
    └── GitHub
```

---

## 📁 Project Structure

- [`index.html`](file:///c:/Users/ahmad/Desktop/templates/index.html): Semantic HTML5 markup structured according to the exact section nodes above.
- [`data.json`](file:///c:/Users/ahmad/Desktop/templates/data.json): Structured JSON data blueprint mirroring every property of your tree diagram.
- [`styles.css`](file:///c:/Users/ahmad/Desktop/templates/styles.css): Modern dark-mode styling with glassmorphic cards, smooth scrolling, and responsive layouts.
- [`script.js`](file:///c:/Users/ahmad/Desktop/templates/script.js): Light script for responsive navigation and dynamic JSON loading.

---

## 🛠️ How to Customize

1. **Update Data (`data.json`)**: Simply edit the JSON fields to update your Name, Title, Projects, Work Experience, Education, and Social Links.
2. **Update Layout (`index.html`)**: HTML tags use descriptive semantic section IDs (`#hero`, `#about`, `#education`, `#experience`, `#projects`, `#skills`, `#certifications`, `#contact`).
3. **Preview**: Open `index.html` directly in your browser or run a simple local web server (`npx serve .` or Live Server extension).
