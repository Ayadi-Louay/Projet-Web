# Transitex - Transport and Logistics Platform

## 📋 Project Description

Transitex is a modern web application developed to showcase transport and logistics services. The project offers a professional and intuitive user interface allowing users to discover services, register, and log into the platform.

---

## 🚀 Framework Choice

### React.js with Create React App

We chose **React.js** as the main framework for this project for the following reasons:

1. **Reusable Components**: React allows creating modular and reusable components, facilitating code maintenance and evolution.

2. **Optimal Performance**: React's Virtual DOM ensures high performance and a smooth user experience.

3. **Large Ecosystem**: React has a vast community and numerous complementary libraries.

4. **Development Ease**: Create React App provides a preconfigured setup that accelerates project startup.

5. **Single Page Application (SPA)**: React enables creating a modern user experience without page reloads.

6. **Simplified State Management**: React hooks (useState, useEffect) allow intuitive state management.

---

## ✨ Developed Features

### 1. **Home Page (Hero Section)**
- Attractive visual presentation of Transitex
- Smooth navigation to different sections
- Responsive and modern design

### 2. **Navigation Bar (Navbar)**
- Intuitive navigation menu
- Links to all main sections
- Adaptive design for mobile and desktop

### 3. **Transport Services**
- **Road Transport**: Presentation of truck transport services
- **Air Transport**: Air freight services
- **Rail Transport**: Logistics solutions by train
- Detailed descriptions of each service

### 4. **Registration Page (Register/Signup)**
- Professional registration form with:
  - Full name field
  - Email address
  - Password and confirmation
- Real-time data validation
- Google sign-up option
- Link to login page
- Two-column design with visual separation
- Custom-styled signup button (green with yellow text)

### 5. **Login Page (Sign In)**
- Modern split-screen login interface
- Left section with "Welcome Back" image
- Right section with form:
  - User ID or email
  - Password
  - Login button
  - "Forgotten password" option
- Professional design with golden title
- User input validation

### 6. **About Us Section**
- Company presentation
- Transitex values and mission
- History and expertise

### 7. **Why Transitex Section**
- Competitive advantages
- Client testimonials
- Company strengths

### 8. **Footer**
- Contact information
- Social media links
- Legal notices
- Sitemap

### 9. **Form Validation**
- Client-side validation for all forms
- Informative error messages
- Email format verification
- Password length control
- Password match verification

### 10. **Responsive Design**
- Automatic adaptation to all screen sizes
- Mobile-first optimization
- User-friendly touch interface

---

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 18
- **Language**: JavaScript (JSX)
- **Styling**: Custom CSS3
- **Build Tool**: Create React App
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Navigation by links

---

## 📦 Project Structure

```
Projet-Web/
├── transitex/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx / Navbar.css
│   │   │   ├── Hero.jsx / Hero.css
│   │   │   ├── Transport.jsx / Transport.css
│   │   │   ├── AirTransport.jsx / AirTransport.css
│   │   │   ├── Train.jsx
│   │   │   ├── Register.jsx / Register.css
│   │   │   ├── Signin.jsx / Signin.css
│   │   │   ├── about_us.jsx / about_us.css
│   │   │   ├── WhyTransitex.jsx
│   │   │   └── Footer.jsx / Footer.css
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── README.md
└── README.md
```

---

## 🚀 Project Launch Steps

### Prerequisites

Before starting, make sure you have installed:
- **Node.js** (version 14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (installed automatically with Node.js)
- A code editor (VS Code recommended)

### Installation and Launch

#### 1. Clone the Repository

```bash
git clone https://github.com/Ayadi-Louay/Projet-Web.git
cd Projet-Web
```

#### 2. Navigate to Project Folder

```bash
cd transitex
```

#### 3. Install Dependencies

```bash
npm install
```

This command will install all necessary packages defined in `package.json`.

#### 4. Launch Application in Development Mode

```bash
npm start
```

The application will automatically open in your default browser at:
**http://localhost:3000**

The development server will automatically reload with each code modification.

#### 5. Build for Production (Optional)

To create an optimized production version:

```bash
npm run build
```

This command will create a `build/` folder containing optimized files ready for deployment.

---

## 🧪 Available Scripts

### `npm start`
Launches the application in development mode at http://localhost:3000

### `npm test`
Launches tests in interactive mode

### `npm run build`
Creates an optimized production version in the `build/` folder

### `npm run eject`
**⚠️ Irreversible operation** - Exposes Webpack configuration for advanced customization

---

## 🎨 Visual Features

- **Color Palette**:
  - Gold (#d4af37) for main titles
  - Navy blue (#1a3a52) for buttons
  - Green (#28a745) with yellow (#ffd700) for signup button
  - Light gray for form backgrounds

- **Modern Design**:
  - Split-screen interfaces for login and registration
  - Professional background images
  - Hover animations
  - Smooth transitions

- **Optimized UX**:
  - Intuitive forms with clear labels
  - Explicit error messages
  - Responsive design for all devices

---

## 👥 Contributors

- **Ayadi Louay** - 
- **Farhat Zenim** -
- **Mahdi Fakhfakh** -

---

## 📝 License

This project is developed as part of an academic project at SUPCOM.

---

## 📞 Contact

For any questions or suggestions regarding the project, feel free to contact the development team.

---

**Transitex** - Your trusted logistics partner 🚛✈️🚂
