# myshop Project

## 🚀 Introduction

This is an e-commerce project built with **React + Vite + TailwindCSS**.

---

## 📌 Setting up ESLint & Prettier

To maintain clean and consistent code, this project uses **ESLint** and **Prettier**.  
You can follow the detailed guide at the link below:

🔗 [ESLint & Prettier Setup Guide](https://duthanhduoc.com/blog/tao-du-an-react-vite-typescript-eslint)

### 📥 Quick Installation

```bash
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

Add the following configuration to `eslint.config.js`:

Thêm đoạn giá trị này vào mảng ignores, mục đích là mình không muốn ESLint check file vite.config.ts

import eslintPluginPrettier from 'eslint-plugin-prettier'

```js
'vite.config.ts'
```

Thêm đoạn code sau vào object plugins

```js
prettier: eslintPluginPrettier
```

Thêm đoạn code sau vào object rules để thêm các rule của Prettier

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

Add the following to `.prettierrc`:

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

Tiếp theo Tạo file .prettierignore ở thư mục root

```js
node_modules/
dist/
```

Tạo file .editorconfig ở thư mục root
Mục đích là cấu hình các config đồng bộ các editor với nhau nếu dự án có nhiều người tham gia.
Để VS Code hiểu được file này thì anh em cài Extension là EditorConfig for VS Code nhé

```js
[*]
indent_size = 2
indent_style = space
```

Việc thêm alias vào file tsconfig.json sẽ giúp VS Code hiểu mà tự động import giúp chúng ta. Lưu ý cái này chỉ giúp
Thêm đoạn này vào compilerOptions trong file tsconfig.json

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

Ý nghĩa của đoạn này là ta có thể import Login from '~/pages/Login' thay vì import Login from '../../pages/Login'. Ngắn gọn và dễ nhìn hơn nhiều!

Cài package @types/node để sử dụng node js trong file ts không bị lỗi

```bash
npm i @types/node -D
```

Cấu hình alias và enable source map ở file vite.config.ts

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

Mở file package.json lên, thêm đoạn script dưới vào

```js
"scripts": {
    //...
    "lint:fix": "eslint . --fix",
    "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.css|*.scss)\""
}
```

Then, run the following command to check and fix code formatting:

```bash
npm run lint
npm run lint:fix
npm run prettier
npm run prettier:fix
```

---

## 📝 Commit Guidelines (Conventional Commits)

This project follows **Conventional Commits** to maintain a structured commit history and changelog.

### 🔹 Common Commit Types:

| Commit Type | Description                                |
| ----------- | ------------------------------------------ |
| `feat`      | Adds a new feature                         |
| `fix`       | Fixes a bug                                |
| `chore`     | Maintenance tasks (dependencies, configs)  |
| `refactor`  | Code refactoring without changing behavior |
| `style`     | Formatting changes (no logic updates)      |
| `perf`      | Performance improvements                   |
| `test`      | Adding or updating tests                   |
| `docs`      | Documentation updates                      |
| `build`     | Build system or dependency updates         |
| `ci`        | Continuous integration configuration       |
| `revert`    | Revert previous commit                     |

### 📌 How to Write a Commit Message:

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

If you made a mistake in your commit and **haven't pushed it yet**, you can amend it:

```bash
git commit --amend -m "feat(ui): update navbar design"
```

### 🏆 Enforcing Commit Rules Automatically:

Install **commitlint** to enforce commit message standards:

```bash
npm install --save-dev @commitlint/{config-conventional,cli}
```

Add a `.commitlintrc.js` file:

```js
module.exports = { extends: ['@commitlint/config-conventional'] }
```

To check commit messages before pushing:

```bash
npx commitlint --from=HEAD~1
```

---

## 📌 Running the Project

```bash
npm install
npm run dev
```

Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

🚀 **Happy Coding!**
