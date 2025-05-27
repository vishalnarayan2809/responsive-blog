# My Learning Journal - Responsive Blog

A modern, responsive blog website built with vanilla JavaScript, HTML5, and CSS3. This project showcases a clean, accessible design with dynamic content loading and mobile-first responsive layout.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all device sizes
- **Dynamic Content Loading**: Blog posts loaded from a centralized data source
- **Progressive Enhancement**: Shows limited posts initially with "View More" functionality
- **Accessibility Focused**: ARIA labels, semantic HTML, and keyboard navigation support
- **Modern CSS**: CSS Grid and Flexbox for robust layouts
- **SEO Optimized**: Proper meta tags and semantic structure

## 📱LIVE LINK OF THE WEBSITE
https://vishalnarayan2809.github.io/responsive-blog/Homepage/index.html

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Design**: CSS Grid, Flexbox, CSS Custom Properties
- **Architecture**: Modular CSS with component-based styling
- **Accessibility**: WCAG 2.1 compliant with ARIA support

## 📁 Project Structure

```
c:\Users\guruk\resposive-grid\
├── Homepage/
│   ├── index.html          # Main homepage
│   ├── homepage.js         # Homepage functionality
│   └── style.css          # Homepage-specific styles
├── Blog/
│   ├── blog.html          # Individual blog post template
│   ├── blog.js            # Blog post functionality
│   └── style.css          # Blog-specific styles
├── About_Me/
│   ├── about_me.html      # About page
│   ├── about.js           # About page functionality
│   └── style.css          # About page styles
├── CSS/
│   ├── variables.css      # CSS custom properties and utilities
│   ├── header.css         # Header component styles
│   ├── footer.css         # Footer component styles
│   └── blog.css           # Shared blog component styles
├── JS/
│   └── data.js            # Centralized blog data
├── images/
│   └── ...                # Project images and assets
└── README.md              # Project documentation
```

## 🎯 Key Features

### 1. Dynamic Blog Loading
- Blog posts are loaded from a centralized `data.js` file
- Initially displays 4 posts with "View More" functionality
- Each post includes title, excerpt, date, and featured image

### 2. Responsive Grid System
- CSS Grid implementation with `auto-fit` and `minmax()`
- Adapts from 3-column layout on desktop to single column on mobile
- Consistent spacing using CSS custom properties

### 3. Accessibility Features
- Semantic HTML structure with proper heading hierarchy
- ARIA labels and roles for screen readers
- Skip navigation links
- Keyboard navigation support
- Focus management with visible focus indicators

### 4. Component-Based CSS Architecture
- Shared styles in `variables.css` using CSS custom properties
- Component-specific stylesheets for maintainability
- Mobile-first responsive design approach

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (recommended for proper module loading)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/responsive-grid-blog.git
   cd responsive-grid-blog
   ```

2. **Start a local server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```
   
   Using Live Server (VS Code Extension):
   - Install Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Access the website**
   ```
   http://localhost:8000/Homepage/index.html
   ```

## 📖 Usage

### Adding New Blog Posts

1. **Update the data source**
   Edit `JS/data.js` and add a new blog object:
   ```javascript
   {
     id: 9,
     title: "Your Blog Title",
     date: "2025-01-15",
     dateFormatted: "JANUARY 15, 2025",
     excerpt: "Brief description of your blog post...",
     image: "path/to/your/image.jpg",
     content: {
       intro: "Introduction paragraph...",
       sections: [
         {
           title: "Section Title",
           paragraphs: ["Paragraph 1", "Paragraph 2"]
         }
       ]
     }
   }
   ```

2. **The blog will automatically appear** on the homepage and be accessible via the blog detail page.

### Customizing Styles

- **Colors and Typography**: Modify `CSS/variables.css`
- **Layout Spacing**: Update CSS custom properties in variables file
- **Component Styles**: Edit respective component CSS files

## 🎨 Customization

### CSS Custom Properties
The project uses CSS custom properties for easy theming:

```css
:root {
  --color-primary: #202020;
  --color-text: #000;
  --color-white: #fff;
  --font-family: sans-serif, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
}
```

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 500px - 1200px
- **Desktop**: > 1200px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📋 Performance

- **Lightweight**: No external dependencies
- **Fast Loading**: Optimized images and minimal CSS
- **SEO Friendly**: Semantic HTML structure
- **Progressive Enhancement**: Works without JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vishal**
- Learning Journey: Frontend Development Bootcamp Student
- Focus: Responsive Web Design, Accessibility, Modern CSS , JS

## 🙏 Acknowledgments

- Inspiration from modern blog designs
- CSS Grid and Flexbox community resources
- Web accessibility guidelines (WCAG 2.1)

---

⭐ Star this repository if you found it helpful!
