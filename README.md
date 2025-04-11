# 🚗 CAR FINDER WEB APP

A responsive and interactive **Car Finder Web Application** built using **React.js + Vite** with TailwindCSS, featuring dynamic filters, real-time search, pagination, dark mode, wishlist with LocalStorage, and API integration.

---

## ✨ Features

- 🔍 Search cars by **brand**, **fuel type**, **price range**, and **seating capacity**
- 📄 View car details with images and specifications
- 💖 Add cars to a **wishlist** (stored in LocalStorage)
- ⚙️ Filter and **sort** cars by price (low → high / high → low)
- 🌙 **Dark mode** toggle
- 🌀 Real-time UI updates with responsive layout
- 📃 Pagination (10 cars per page)
- ⚠️ Error handling and loading states

---

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Storage**: LocalStorage (for wishlist)
- **State Management**: `useState`, `useEffect`
- **Routing**: (Optional) React Router

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/swethathota1712/CAR-FINDER.git
cd CAR-FINDER

# Install dependencies
npm install

# Run development server
npm run dev








CAR-FINDER/
├── public/
├── src/
│   ├── components/
│   │   ├── CarCard.tsx
│   │   ├── Filters.tsx
│   │   ├── Pagination.tsx
│   │   └── DarkModeToggle.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   └── localStorage.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.ts

