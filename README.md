# Splitter - Tip Calculator

<div align="center">

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Responsive-Mobile_First-green?style=for-the-badge" alt="Responsive" />

  <br />
  <br />

  <a href="https://albertbabaiani.github.io/tip-calculator/">
    <img src="https://img.shields.io/badge/View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="View Live Demo" />
  </a>
  
  <a href="https://www.figma.com/design/CELgSjSm9RGfClpFBWm7kp/tip-calculator-app?node-id=0-1&p=f&t=xA8EA2JwHRHcTJVq-0">
    <img src="https://img.shields.io/badge/Figma_Design_File-000000?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Design" />
  </a>

</div>

---

## About The Project

This is a fully functional, responsive **Tip Calculator** application. The project focuses on DOM manipulation, form validation, and providing a clean, modern user interface. It is built with a **mobile-first** approach, ensuring the layout transitions smoothly from a single-column view on mobile devices to a polished, side-by-side card layout on larger screens.

It demonstrates the use of semantic HTML5, CSS custom properties (variables) for maintainable theming, and Vanilla JavaScript for handling user inputs and mathematical calculations in real-time.

### Key Features

- **Real-Time Calculations:** The app instantly calculates the tip amount per person and the total bill per person as the user types.
- **Custom Error Handling:** Includes logic to prevent division by zero, preventing the app from displaying `NaN` or `Infinity` errors.
- **Mobile-First Workflow:** Styles are written for mobile screens first, then expanded for desktop using a `min-width: 1440px` media query.
- **Accessible Inputs:** Custom tip selection relies on hidden radio buttons linked to labels, ensuring semantic correctness and better accessibility while maintaining the design.
- **Interactive UI States:** Features dynamic hover, focus, and disabled states for buttons and inputs, providing clear visual feedback to the user.

---

## Screenshots

<div align="center"> 
  <h3>Desktop View</h3>
  <img src="./images/previews/desktop-preview.png" alt="Desktop Screenshot" width="700"/>
</div>

<br/>

<div align="center" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">

  <div>
    <h3>Mobile View</h3>
    <img src="./images/previews/mobile-preview.png" alt="Mobile Screenshot" height="500"/>
  </div>
</div>

---

## Built With

- **[HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)** - Semantic structure and form elements.
- **[SCSS / SASS](https://sass-lang.com/)** - Utilized nesting syntax and variables for cleaner, more organized stylesheets.
- **[CSS Flexbox & Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)** - Used for the main component alignment, the side-by-side desktop layout, and the tip percentage button grid.
- **[Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Used for DOM element selection, event listeners, state management, and math logic.
- **[Google Fonts](https://fonts.google.com/)** - Integration of the "Space Mono" font for a distinct, calculator-like typography.
