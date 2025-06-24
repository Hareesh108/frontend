# 📦 Build Your Own Modern CSS Component Library (Like ShadCN / Tailwind UI)

This step-by-step guide walks you through building your **own customizable, modern CSS component library** using TailwindCSS, Radix UI, and React — just like `shadcn/ui`. It will be modular, easily installable, and reusable across projects.

---

## ✅ Goals

* Build **headless UI components** powered by **Radix UI**
* Style them using **TailwindCSS**
* Make components customizable & themeable
* Package components for reuse like:

  ```ts
  import { Button } from "@your-ui/button";
  ```
* Inspired by [`shadcn/ui`](https://ui.shadcn.dev/)

---

## 🔧 Prerequisites

* Node.js (18+)
* pnpm / yarn / npm
* Git

---

## 🧱 Step-by-Step Guide

### 1. **Create a Monorepo (optional but recommended)**

```bash
mkdir your-ui
cd your-ui
turbo init  # or use Nx / Lerna / custom monorepo setup
```

### 2. **Set Up the Core Package**

```bash
cd packages
mkdir core && cd core
pnpm init -y
```

Install dependencies:

```bash
pnpm add react react-dom clsx tailwind-variants tailwindcss
pnpm add -D typescript @types/react postcss autoprefixer
```

Initialize Tailwind:

```bash
npx tailwindcss init -p
```

Add base config (`tailwind.config.ts`):

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

### 3. **Create Base Tailwind Styles**

Create `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add to your `package.json` exports:

```json
"exports": {
  "./styles": "./src/styles.css"
}
```

---

### 4. **Create Your First Component (e.g., Button)**

```bash
mkdir -p packages/button/src
```

Install Radix primitives (if needed):

```bash
pnpm add @radix-ui/react-slot
```

#### `button/src/button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@your-ui/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "border border-input bg-transparent",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
```

Add exports:

```ts
// button/index.ts
export * from "./src/button";
```

---

### 5. **Utilities Package**

```bash
mkdir -p packages/utils/src
```

#### `utils/src/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Export utils:

```ts
// utils/index.ts
export * from "./src/utils";
```

---

### 6. **Package Exports**

Ensure each package has its own `package.json`:

```json
{
  "name": "@your-ui/button",
  "main": "./index.js",
  "types": "./index.d.ts",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

---

### 7. **Consume in a Project**

In your React app:

```bash
pnpm add @your-ui/button @your-ui/utils
```

In your component:

```tsx
import { Button } from "@your-ui/button";

export default function Home() {
  return <Button variant="outline">Click me</Button>;
}
```

---

## 🧩 Bonus Tips

* Use `tailwind-variants` or `class-variance-authority` for variant management
* Support dark mode and theming via Tailwind config
* Add Storybook or Stylebook for documentation
* Use `changesets` or `npm version` for versioning

---

## 🚀 Final Thoughts

Now you have a **scalable, composable, reusable** component system like ShadCN!

* **Radix** for accessibility
* **Tailwind** for utility-first styling
* **Your brand** for full control

You can now scale your design system with complete freedom. 🎨

Happy building!

---

## 📚 References

* [https://ui.shadcn.dev](https://ui.shadcn.dev)
* [https://tailwindcss.com](https://tailwindcss.com)
* [https://www.radix-ui.com](https://www.radix-ui.com)
* [https://turbo.build](https://turbo.build)
* [https://github.com/nextui-org/tailwind-variants](https://github.com/nextui-org/tailwind-variants)
