# Next.js & React Practice Repository

A comprehensive Next.js/React practice repository featuring various interactive components and features designed for learning modern web development concepts. This project serves as a hands-on playground for experimenting with React hooks, Next.js features, and frontend development patterns.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15.3.3
- **Library**: [React](https://reactjs.org) 19.0.0  
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1.10
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) 5.5.0
- **Language**: JavaScript
- **Development**: Hot reload, ESLint

## 🎯 Learning Objectives

This repository demonstrates practical implementation of:
- React Hooks (useState, useEffect)
- Component composition and reusability
- API data fetching and state management
- Form handling and user input
- Responsive design with Tailwind CSS
- Next.js App Router and file-based routing
- Interactive UI components

## 🚀 Features & Demos

### Core Pages
- **🏠 Home** (`/`) - React State Demo with interactive counter
- **📄 Posts** (`/Posts`) - Data viewer fetching from JSONPlaceholder API (posts, users, comments)
- **✅ Task Tracker** (`/Task-Tracker`) - Simple task management with add functionality
- **🗳️ Vote Counter** (`/Vote`) - Another counter implementation for practice
- **👤 User Form** (`/User-form`) - Form handling with name, email, and number inputs
- **📖 About** (`/about`) - About page
- **📞 Contact** (`/contact`) - Contact information
- **⚙️ Settings** (`/settings`) - Settings page

### Reusable Components
- **Navigation Bar** - Responsive navigation with routing
- **Footer** - Site footer with links and branding
- **Dropdown** - Interactive course selection dropdown
- **Button** - Reusable button component

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/BishantRajbanshi/Next.js-React_Practise.git
   cd Next.js-React_Practise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── navbar.js       # Navigation component
│   │   ├── footer.js       # Footer component
│   │   ├── dropdown.js     # Dropdown component
│   │   └── button.js       # Button component
│   ├── Posts/              # Data fetching demo
│   ├── Task-Tracker/       # Task management demo
│   ├── Vote/               # Counter demo
│   ├── User-form/          # Form handling demo
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── settings/           # Settings page
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   └── globals.css         # Global styles
```

## 💻 Development

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

### Making Changes
- Edit any page by modifying the corresponding file in `src/app/`
- The application supports hot reload - changes are reflected immediately
- Add new pages by creating folders with `page.js` files
- Extend components in the `src/app/components/` directory

## 📚 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide to Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### React
- [React Documentation](https://reactjs.org/docs) - Official React documentation
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Introduction to React Hooks
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html) - Learn React step by step

### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎓 Purpose

This repository serves as a learning platform for:
- **Beginners** exploring React and Next.js concepts
- **Developers** experimenting with new features and patterns
- **Students** practicing component-based architecture
- **Anyone** interested in modern frontend development

Feel free to explore, modify, and extend the examples to deepen your understanding of React and Next.js!

## 🚀 Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.
