# 🚀 Next.js App

A modern, responsive web application built using **Next.js**, **ShadCN UI**, **Redux Toolkit**, **Tailwind CSS**, and **Framer Motion**. This project focuses on clean design, performance optimization, scalable architecture, and top-notch developer experience.

---

## 🔧 Tech Stack

- ⚛️ [Next.js](https://nextjs.org/) – React Framework for production
- 🧠 [Redux Toolkit](https://redux-toolkit.js.org/) – State management made simple
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- 💎 [ShadCN UI](https://ui.shadcn.com/) – Beautifully styled components using Radix
- 🎥 [Framer Motion](https://www.framer.com/motion/) – Seamless animation library
- 🗂️ TypeScript – Type-safe code for better DX

---

## ✨ Features

### 🎯 Responsive Design

- Fully responsive UI across **desktop**, **tablet**, and **mobile**.
- Built with **Tailwind CSS** using **Flexbox** and **CSS Grid** for modern layout techniques.
- Components scale beautifully with screen size and adapt intuitively.

### ⚡ Performance Optimization

- Fast load times and smooth user experience.
- Efficient re-renders with **Redux Toolkit**'s `createSlice`, and memoized selectors.
- Lazy-loading and code-splitting with Next.js to enhance runtime performance.

### 🧼 Clean Code & Best Practices

- Modular architecture with reusable, maintainable components.
- Follows best practices in **React** and **Next.js** development.
- Organized folder structure and clean separation of concerns.
- Scalable state management using Redux Toolkit (no prop drilling!).

---

## 📁 Folder Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
│   ├── ui/
│   ├── shared/
│   └── ...
├── redux/
│   ├── apis/
│   ├── app/
│   └── ...
├── lib/
└── public/
```

---

## 🧪 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
```

2. **Install dependencies**
```bash
pnpm install
# or
yarn install
# or
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

4. **Build for production**
```bash
pnpm build
```

---

## 📦 Redux Toolkit Setup Example

```ts
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../features/example/exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
```

---

## 🎬 Motion Example

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h1>Hello World</h1>
</motion.div>
```

---

## 📫 Contact

Built with ❤️ by **Md Sharif**  
📧 Email: [srak780@gmail.com](mailto:srak780@gmail.com)  
🔗 Profile: [sharifdev.vercel.app/](https://sharifdev.vercel.app/)
