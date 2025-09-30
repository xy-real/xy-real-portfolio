# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Perfect for showcasing your projects and skills as an undergraduate student or junior developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes (coming soon)
- **Smooth Scrolling**: Navigation with smooth scrolling between sections
- **Interactive Components**: Animated skill bars, project cards, and contact form
- **SEO Optimized**: Built with Next.js for optimal performance

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal information and background
3. **Projects**: Showcase of your work with links to live demos and source code
4. **Skills**: Interactive skill bars organized by categories
5. **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- **Next.js 15**: React framework for production
- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Animations**: Smooth transitions and hover effects

## 🎨 Customization Guide

### 1. Personal Information

**Update Hero Section (`src/components/Hero.tsx`)**:
Replace "Your Name" with your actual name and update your title/role.

**Update About Section (`src/components/About.tsx`)**:
Update your initials in the avatar and write your personal description.

### 2. Projects

**Update Projects (`src/components/Projects.tsx`)**:
Replace the sample projects with your actual projects, including:
- Project titles and descriptions
- Technologies used
- GitHub repository links
- Live demo links

### 3. Skills

**Update Skills (`src/components/Skills.tsx`)**:
Adjust skill levels (0-100) based on your proficiency and add/remove skills as needed.

### 4. Contact Information

**Update Contact (`src/components/Contact.tsx`)**:
Replace placeholder contact information with your actual:
- Email address
- LinkedIn profile
- GitHub username

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to see your portfolio

4. **Customize** the content following the guide above

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Main page component
└── components/
    ├── Navigation.tsx       # Navigation bar
    ├── Hero.tsx            # Hero section
    ├── About.tsx           # About section
    ├── Projects.tsx        # Projects showcase
    ├── Skills.tsx          # Skills section
    └── Contact.tsx         # Contact section
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the build folder to [Netlify](https://netlify.com)

## 📝 Customization Checklist

- [ ] Update personal information (name, title, description)
- [ ] Add your actual projects with descriptions and links
- [ ] Customize skills and proficiency levels
- [ ] Add your contact information and social media links
- [ ] Add your photo to replace the placeholder avatar
- [ ] Add project screenshots
- [ ] Customize colors and styling (optional)
- [ ] Test on mobile devices
- [ ] Deploy to production

---

**Happy coding! 🚀**
