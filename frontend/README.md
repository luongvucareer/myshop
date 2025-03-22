# myshop Project

## 🚀 Introduction

This is an e-commerce project built with **React + Vite + TailwindCSS**.  
It also includes **Redux Toolkit** for state management and **React Router** for navigation.

- TailwindCSS: <https://tailwindcss.com/docs/installation/using-vite>
- ESLint + Prettier: <https://duthanhduoc.com/blog/tao-du-an-react-vite-typescript-eslint>
- Redux Toolkit: <https://redux-toolkit.js.org/tutorials/quick-start>
- React Router: <https://reactrouter.com/en/main/start/tutorial>

---

## 📌 Setting up ESLint & Prettier

To maintain clean and consistent code, this project uses **ESLint** and **Prettier**.  
You can follow the detailed guide at the link below:

🔗 [ESLint & Prettier Setup Guide](https://duthanhduoc.com/blog/tao-du-an-react-vite-typescript-eslint)

### 📥 Quick Installation

1. Run the following command to install the necessary packages:

   ```bash
   npm i prettier eslint-config-prettier eslint-plugin-prettier -D
   ```

### **Ignoring Files in ESLint**

- To prevent ESLint from checking `vite.config.ts`, add it to the `ignores` array:

  ```js
  'vite.config.ts'
  ```

### **Adding Prettier Rules**

- To integrate Prettier rules into ESLint, modify the `plugins` object:

  ```js
  prettier: eslintPluginPrettier
  ```

- Then, in the `rules` object, add:

  ```js
  'prettier/prettier': [
    'warn',
    {
      arrowParens: 'always',
      semi: false,
      trailingComma: 'none',
      tabWidth: 2,
      endOfLine: 'auto',
      useTabs: false,
      singleQuote: true,
      printWidth: 120,
      jsxSingleQuote: true
    }
  ]
  ```

### **Configuring Prettier Ignore**

- Add the following to `.prettierrc`:

  ```json
  {
    "arrowParens": "always",
    "semi": false,
    "trailingComma": "none",
    "tabWidth": 2,
    "endOfLine": "auto",
    "useTabs": false,
    "singleQuote": true,
    "printWidth": 120,
    "jsxSingleQuote": true
  }
  ```

- Next, create a `.prettierignore` file in the root directory:

  ```js
  node_modules/
  dist/
  ```

---

## 📌 Setting Up EditorConfig

- Create a `.editorconfig` file in the root directory. The purpose is to synchronize editor configurations among multiple contributors. To enable this in VS Code, install the "EditorConfig for VS Code" extension.

  ```js
  [*]
  indent_size = 2
  indent_style = space
  ```

---

## 📌 Using Aliases in TypeScript Configuration

- Adding an alias in the `tsconfig.json` file will help VS Code understand and auto-import for us. Note that this only helps with imports.

- Add the following to `compilerOptions` in the `tsconfig.json` file:

  ```js
  {
    "files": [],
    "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "~/*": ["src/*"]
      }
    }
  }
  ```

- The meaning of this is that we can import `Login` from `~/pages/Login` instead of `../../pages/Login`. It's much shorter and easier to read!

- Install the package `@types/node` to use Node.js in TypeScript files without errors:

  ```bash
  npm i @types/node -D
  ```

---

## 📌 Setting Up Source Maps in Vite

- Configure alias and enable source maps in the `vite.config.ts` file:

  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react-swc'
  import path from 'path'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000
    },
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  })
  ```

---

## 📌 Adding Scripts to package.json

- Open the `package.json` file and add the following script:

  ```js
  "scripts": {
      //...
      "lint:fix": "eslint . --fix",
      "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
      "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
      "prepare": "husky install"
  }
  ```

- Then, run the following commands to check and fix code formatting:

  ```bash
  npm run lint
  npm run lint:fix
  npm run prettier
  npm run prettier:fix
  ```

---

## 📝 Commit Guidelines (Conventional Commits)

This project follows **Conventional Commits** to maintain a structured commit history and changelog. Commit messages are enforced automatically using **commitlint** and **husky**.

### 🔹 Common Commit Types:

| Commit Type    | Description                                |
| -------------- | ------------------------------------------ |
| **`feat`**     | Adds a new feature                         |
| **`fix`**      | Fixes a bug                                |
| **`chore`**    | Maintenance tasks (dependencies, configs)  |
| **`refactor`** | Code refactoring without changing behavior |
| **`style`**    | Formatting changes (no logic updates)      |
| **`perf`**     | Performance improvements                   |
| **`test`**     | Adding or updating tests                   |
| **`docs`**     | Documentation updates                      |
| **`build`**    | Build system or dependency updates         |
| **`ci`**       | Continuous integration configuration       |
| **`revert`**   | Revert previous commit                     |

### 📌 How to Write a Commit Message:

- Use the following format:

  ```bash
  git commit -m "<type>(<scope>): <message>"
  ```

**Examples:**

```bash
git commit -m "feat(auth): add login functionality"
git commit -m "fix(cart): fix product display issue"
git commit -m "chore: upgrade dependencies"
```

### 🛠 Amending a Commit:

- If you made a mistake in your commit and **haven't pushed it yet**, you can amend it:

  ```bash
  git commit --amend -m "feat(ui): update navbar design"
  ```

### 🏆 Enforcing Commit Rules Automatically:

- Install **commitlint** to enforce commit message standards:

  ```bash
  npm install --save-dev @commitlint/{config-conventional,cli} husky
  ```

- Add a `.commitlintrc.js` file:

  ```js
  module.exports = { extends: ['@commitlint/config-conventional'] }
  ```

- To set up **Husky** hooks, run the following commands:

  ```bash
  npx husky install
  npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
  ```

- This ensures that every commit message is validated automatically before being committed. You can manually check if commitlint is working by running:

  ```bash
  npx commitlint --from=HEAD~1
  ```

---

## 📌 Running the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## 📌 Installing Redux Toolkit & React Router

To manage global state efficiently, this project uses **Redux Toolkit**.  
For client-side routing, **React Router** is integrated.

### 📥 Installation

Run the following command to install Redux Toolkit and React Router:

```bash
npm install @reduxjs/toolkit react-redux react-router-dom
```

### 🛠 Setting Up Redux Toolkit

1. Create a Redux store:

   ```js
   import { configureStore } from '@reduxjs/toolkit'

   export const store = configureStore({
     reducer: {}
   })
   ```

2. Wrap the app with `Provider` in `main.tsx`:

   ```js
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import { Provider } from 'react-redux'
   import { store } from './store'
   import App from './App'

   ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
       <App />
     </Provider>
   )
   ```

### 🚀 Setting Up React Router

1. Modify `App.tsx` to include routing:

   ```js
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
   import Home from './pages/Home'
   import About from './pages/About'

   function App() {
     return (
       <Router>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
         </Routes>
       </Router>
     )
   }

   export default App
   ```

Now Redux Toolkit and React Router are set up for your project! 🚀

---

🚀 **Happy Coding!**
luongvucareer
VkMD57oiQROdex4x
