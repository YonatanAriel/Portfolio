# 🎨 Personal Portfolio Website

> A modern, responsive portfolio website built with React and Vite

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Site-green?style=for-the-badge&logo=netlify)](https://yonatan-ariel-portfolio.netlify.app)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## 📋 About This Project

A sleek and modern portfolio website showcasing web development projects, skills, and professional experience. Built with performance and user experience in mind, featuring smooth animations, responsive design, and interactive elements.

## ✨ Features

- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎬 Smooth Animations** - Interactive elements with CSS animations
- **⚡ Fast Performance** - Built with Vite for optimal loading speeds
- **🎨 Modern Design** - Clean, professional UI/UX
- **📧 Contact Integration** - Multiple contact methods and social links
- **🖼️ Project Showcase** - Interactive project gallery with live demos
- **🎯 Intersection Observer** - Smooth scroll animations and section highlighting

[![Portfolio Website](https://img.shields.io/badge/Portfolio-Live%20Demo-blue?style=for-the-badge&logo=netlify)](https://yonatan-ariel-portfolio.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yonatan-ariel/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/YonatanAriel)

## ️ Built With

### Core Technologies

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=flat-square&logo=css3)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)

### Key Dependencies

- **React Scroll** - Smooth scrolling navigation
- **React Intersection Observer** - Scroll-triggered animations

### Deployment

![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white)

## 📂 Project Structure

```
portfolio/
├── public/
│   └── assets/          # Images, icons, and media files
├── src/
│   ├── components/      # Reusable React components
│   │   ├── BackgroundVideo/
│   │   ├── HeaderLink/
│   │   ├── Layout/
│   │   └── ProfilePhoto/
│   ├── data/           # Static data and content
│   ├── hooks/          # Custom React hooks
│   ├── animations.css  # CSS animations
│   ├── index.css      # Global styles
│   ├── App.jsx        # Main App component
│   └── main.jsx       # React entry point
├── package.json
├── vite.config.js     # Vite configuration
└── README.md
```

## 🎯 Website Sections

### 🏠 Hero Section

- Animated background video
- Professional introduction
- Call-to-action buttons

### � Skills

- Categorized skill sets (Frontend, Backend, Tools, Soft Skills)
- Visual skill icons
- Technology badges

### 🚀 Projects

- Featured project carousel
- Live demo links
- Technology stack for each project
- GitHub repository links

### 📞 Contact

- Multiple contact methods
- Social media links
- Direct communication options

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YonatanAriel/portfolio.git
   ```

2. **Navigate to project directory**

   ```bash
   cd portfolio
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**

   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Adding New Projects

1. Update the `projects` array in `src/data/data.js`
2. Add project images to `public/assets/`
3. Include technology icons and descriptions

### Modifying Skills

1. Edit the `skills` array in `src/data/data.js`
2. Add new skill icons to `public/assets/`
3. Organize by categories (Frontend, Backend, Tools, etc.)

### Updating Contact Information

1. Modify the `contactLinks` array in `src/data/data.js`
2. Update social media links and contact methods

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop** (1200px and above)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## ⚡ Performance

- **Vite** for fast development and optimized builds
- **Lazy loading** for images and components
- **CSS animations** for smooth interactions
- **Optimized assets** for fast loading times

## 🎬 Animations

- CSS keyframe animations for smooth transitions
- Intersection Observer API for scroll-triggered effects
- Hover effects and interactive elements
- Smooth scrolling navigation

## � Scripts

```bash
npm start       # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git pus`h origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">

**Built with ❤️ using React and Vite**

</div>
