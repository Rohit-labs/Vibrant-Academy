# Vibrant Academy

A React-based educational platform showcasing classes, results, and student testimonials with a modern, responsive design built with Tailwind CSS.

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm start
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm test
```

---

## 📁 Project Structure

### `/src` - Main Source Code

#### **`/pages`** - Page Components
Each page is a full-page component with its own styling:

- **`Home/`** - Homepage of the academy
  - `Home.jsx` - Main home page component
  - `Home.css` - Homepage styling

- **`About/`** - About the academy page
  - `About.jsx` - About page component
  - `About.css` - About page styling

- **`Results/`** - Results/Performance page
  - `Results.jsx` - Displays student results and achievements
  - `Results.css` - Results page styling

- **`Contact/`** - Contact/Get in Touch page
  - `Contact.jsx` - Contact form and information
  - `Contact.css` - Contact page styling

#### **`/components`** - Reusable UI Components

- **`Navbar/`** - Navigation bar component
  - `Navbar.jsx` - Top navigation with menu
  - `Navbar.css` - Navigation styling

- **`Footer/`** - Footer component
  - `Footer.jsx` - Site footer with links
  - `Footer.css` - Footer styling

- **`WhatsAppButton/`** - WhatsApp contact button
  - `WhatsAppButton.jsx` - Floating WhatsApp button
  - `WhatsAppButton.css` - Button styling

- **`InstagramButton/`** - Instagram follow button
  - `InstagramButton.jsx` - Instagram link button
  - `InstagramButton.css` - Button styling

- **`Loader/`** - Loading spinner component
  - `Loader.jsx` - Loading animation display

#### **`/data`** - Static Data Files

- **`toppers.js`** - Top performing students data
- **`results.js`** - Student results and exam performance data
- **`testimonials.js`** - Student testimonials and feedback data

#### **`/styles`** - Global Styling

- **`global.css`** - Global styles and CSS variables
- **`App.css`** - App component styling
- **`index.css`** - Root styling

#### **Root Files**

- **`App.jsx`** - Main application component with routing
- **`index.js`** - Entry point for React application

---

## 🎨 Technology Stack

- **React** 19.2 - UI library
- **React Router DOM** 7.16 - Client-side routing
- **Tailwind CSS** 3.4 - Utility-first CSS framework
- **Swiper** 12.2 - Carousel/slider component
- **React Icons** 5.6 - Icon library
- **AOS** 2.3 - Scroll animation library
- **EmailJS** 4.4 - Email service integration

---

## ⚙️ Configuration Files

- **`tailwind.config.js`** - Tailwind CSS configuration with custom colors, spacing, and fonts
- **`package.json`** - Project dependencies and scripts
- **`public/index.html`** - HTML entry point

---

## 🏗️ Build Output

- **`/build`** - Production build folder (generated after `npm run build`)
  - Contains minified CSS and JavaScript files
  - Ready for deployment

---

## 💡 Usage

1. Create page content in `/src/pages`
2. Build reusable components in `/src/components`
3. Store data in `/src/data` files
4. Use Tailwind classes for styling
5. Add routes in `App.jsx` for navigation

---

## 📝 Notes

- This project uses **Tailwind CSS** for styling - no need to write raw CSS in most cases
- Custom colors are defined in `tailwind.config.js` (brand-teal, brand-purple, etc.)
- Pages are automatically styled with their corresponding `.css` files
- Responsive design is built-in with Tailwind's mobile-first approach
