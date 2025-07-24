# 🦷 Dentaire - Professional Dental Clinic Website

A pixel-perfect, modern dental clinic website built with React and TailwindCSS, featuring smooth animations and a professional medical aesthetic.

## ✨ Features

- **Pixel-Perfect Design**: Exact replica of the Dentaire reference website
- **Modern React Architecture**: Built with functional components and hooks
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Responsive Design**: Mobile-first approach with perfect mobile experience
- **Professional Medical Aesthetic**: Clean, trustworthy design for dental clinics
- **Interactive Components**: Hover effects, carousels, and micro-interactions
- **SEO Optimized**: Semantic HTML structure and meta tags

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3C5A99`
- **Secondary Cyan**: `#00BCD4`
- **White**: `#FFFFFF`
- **Light Gray Background**: `#F7F7F7`
- **Text Dark Gray**: `#2E2E2E`
- **Subtle Gray Border**: `#E4E4E4`

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Open Sans (Google Fonts)

### Layout
- **12-column grid system** with `max-w-1200`
- **Consistent spacing**: `py-16 px-6`
- **Alternating backgrounds**: white → light gray → white
- **Professional card-based design**

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Heroicons** - Beautiful SVG icons
- **Google Fonts** - Poppins & Open Sans

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation & logo
│   ├── Hero.jsx            # Hero section with CTA
│   ├── Services.jsx        # Dental services grid
│   ├── About.jsx           # About clinic section
│   ├── WhyChooseUs.jsx     # Features & statistics
│   ├── Team.jsx            # Doctor profiles
│   ├── Testimonials.jsx    # Patient reviews carousel
│   ├── Pricing.jsx         # Service pricing plans
│   ├── Contact.jsx         # Contact form & info
│   └── Footer.jsx          # Footer with links
├── hooks/
│   └── useScrollAnimation.js # Custom animation hook
├── App.jsx                 # Main app component
└── index.css              # Global styles & Tailwind
```

## 🎯 Sections

### 1. Header
- Sticky navigation with transparent → white transition
- Logo with "Dentaire" branding
- Mobile-responsive menu
- CTA button for appointments

### 2. Hero Section
- Full-screen gradient background
- Two-column layout with content and image
- Welcome badge with star icon
- Professional dental care messaging
- Interactive buttons and floating elements

### 3. Services Section
- 4-column grid of service cards
- Feature lists for each service
- "Read More" buttons with arrows
- Professional dental service descriptions

### 4. About Section
- Two-column layout with image and content
- Feature list with check icons
- Professional messaging about dental care
- Dual CTA buttons

### 5. Why Choose Us
- 3-column feature grid
- Statistics section with icons
- Professional dental messaging
- Consistent styling

### 6. Team Section
- 4-column doctor cards with ratings
- Professional doctor information
- Statistics section
- "View All Team Members" CTA

### 7. Testimonials
- Interactive carousel with navigation
- Star ratings and patient reviews
- Statistics section
- Professional testimonial styling

### 8. Pricing Section
- 3-column pricing plans
- "Most Popular" badge
- Feature lists with check icons
- Professional pricing structure

### 9. Contact Section
- Two-column layout with form and info
- Professional contact form
- Contact information cards
- Map placeholder
- Statistics section

### 10. Footer
- 4-column layout with company info
- Service, company, and support links
- Social media icons
- Copyright and policy links

## 🎭 Animations

### Scroll-Triggered Animations
- **Fade In Up**: Text elements and headers
- **Slide In Left/Right**: Two-column layouts
- **Scale In**: Cards and interactive elements
- **Stagger Container**: Grid layouts with staggered children

### Interactive Animations
- **Hover Effects**: Cards lift and scale
- **Button Animations**: Scale and color transitions
- **Icon Animations**: Rotation and scaling
- **Carousel Navigation**: Smooth transitions

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Selix764/dental-templates.git
   cd dental-templates
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured desktop experience
- **Large Screens**: Optimized for 1200px+ screens

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: '#3C5A99',
  secondary: '#00BCD4',
  // ... other colors
}
```

### Typography
Modify fonts in `tailwind.config.js`:
```javascript
fontFamily: {
  'heading': ['Poppins', 'sans-serif'],
  'body': ['Open Sans', 'sans-serif'],
}
```

### Content
- Update text content in each component
- Replace placeholder images with real clinic photos
- Modify contact information and services

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Follow the existing animation patterns
4. Use the established design system

### Styling Guidelines
- Use TailwindCSS utility classes
- Follow the established color palette
- Maintain consistent spacing (`py-16`, `gap-8`, etc.)
- Use the defined typography hierarchy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using React, TailwindCSS, and Framer Motion** 