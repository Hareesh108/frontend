# CSS Types & Styling Methods Guide

A comprehensive guide to CSS data types, styling techniques, and modern workflows.  
![CSS](https://img.shields.io/badge/CSS-Expert-blue?logo=css3)

---

## Table of Contents  

- [CSS Data Types](#css-data-types)  
- [Styling Methods](#styling-methods)  
- [CSS Architecture & Methodologies](#css-architecture--methodologies)  
- [Framework-Specific Styles](#framework-specific-styles)  
- [Experimental Techniques](#experimental-techniques)  

---

## CSS Data Types  

### Core Types  

- **`<color>`**: `#ff0000`, `rgb(255 0 0 / 0.5)`, `hsl(0deg 100% 50%)`  
- **`<length>`**: `12px`, `5em`, `20vh`  
- **`<percentage>`**: `width: 75%`  
- **`<number>`/`<integer>`**: `opacity: 0.8`, `order: 2`  
- **`<angle>`**: `45deg`, `1.5rad`  

### Advanced Types  

- **`<gradient>`**:  

  ```css
  background: linear-gradient(90deg, red, blue);
  ```

- **`<transform-function>`**: `transform: rotate(45deg) scale(1.2);`  
- **`<variable>`**:  

  ```css
  :root { --primary: #3498db; }
  .box { color: var(--primary); }
  ```

---

## Styling Methods  

### Core Methods  

1. **Inline Styles**:  

   ```html
   <div style="padding: 20px; color: red;"></div>
   ```  

2. **Embedded Styles**:  

   ```html
   <style>
     .title { font-size: 2rem; }
   </style>
   ```  

3. **External Stylesheets**:  

   ```html
   <link rel="stylesheet" href="styles.css">
   ```  

### Advanced Methods  

- **CSS Preprocessors (Sass)**:  

  ```scss
  $primary: #333;
  .button {
    background: $primary;
    &:hover { opacity: 0.8; }
  }
  ```  

- **CSS Modules**:  

  ```jsx
  // React example
  import styles from './Button.module.css';
  <button className={styles.error}>Delete</button>
  ```  

- **Tailwind CSS (Utility-First)**:  

  ```html
  <div class="p-4 bg-gray-100 rounded-lg shadow-md"></div>
  ```  

- **CSS-in-JS (styled-components)**:  

  ```jsx
  const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'gray'};
    padding: 1rem 2rem;
  `;
  ```  

---

## CSS Architecture & Methodologies  

- **BEM**: `.block__element--modifier`  
- **SMACSS**: Categorizes styles into base, layout, module, state, and theme.  
- **ITCSS**: Layered architecture from generic to explicit:  

  ```css
  @layer settings, tools, generic, elements, objects, components, utilities;
  ```  

---

## Framework-Specific Styles  

- **Vue Scoped CSS**:  

  ```vue
  <style scoped>
  .card { border: 1px solid #eee; }
  </style>
  ```  

- **Angular View Encapsulation**:  

  ```typescript
  @Component({
    encapsulation: ViewEncapsulation.Emulated
  })
  ```  

---

## Experimental Techniques  

- **CSS Container Queries**:  

  ```css
  @container (width > 600px) {
    .card { grid-template-columns: 1fr 1fr; }
  }
  ```  

- **CSS Houdini (Custom Properties)**:  

  ```js
  CSS.registerProperty({
    name: '--gradient-angle',
    syntax: '<angle>',
    initialValue: '0deg',
    inherits: false
  });
  ```  

---

## Good Stuff:
- https://web.dev/learn/css

## License  

MIT © [Hareesh Bhittam]
