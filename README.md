# Dashboard Tutorial

A comprehensive dashboard application built with modern web technologies, featuring analytics, user authentication, and data management capabilities.

## 📁 Project Structure

```
dashboard-tutorial/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # Authentication routes
│   │   ├── layout.tsx         # Root layout component
│   │   ├── (main)/           # Main application routes
│   │   ├── posts/            # Posts-related pages
│   │   └── api/auth/[...nextauth]/ # NextAuth configuration
│   ├── components/            # Reusable React components
│   │   ├── auth/             # Authentication components
│   │   ├── Dashboard/        # Dashboard-specific components
│   │   ├── Posts/            # Post-related components
│   │   ├── provider/         # Context providers
│   │   └── ui/               # UI components
│   ├── data/                 # Data files and utilities
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility libraries and configurations
│   └── middleware/           # Next.js middleware
├── globals.css               # Global styles
├── layout.tsx               # Layout configuration
└── favicon.ico              # Application favicon
```

## 🚀 Features

- **Authentication System**: Secure user authentication with NextAuth
- **Analytics Dashboard**: Interactive charts and data visualization
- **Post Management**: Create, read, update, and delete posts with pagination
- **Responsive Design**: Mobile-first responsive UI components
- **Theme Support**: Light/dark theme toggle functionality
- **Type Safety**: Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **Styling**: CSS Modules / Tailwind CSS
- **Components**: Custom UI component library
- **Data Management**: Custom hooks and providers

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard-tutorial
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
# Add other required environment variables
```

## 🚀 Getting Started

1. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. Navigate through the application:
   - **Dashboard**: View analytics and key metrics
   - **Posts**: Manage your content with full CRUD operations
   - **Authentication**: Sign in/out functionality

## 🧩 Key Components

### Dashboard Components
- `AnalyticsChart.tsx`: Interactive data visualization
- `Dashboard.tsx`: Main dashboard layout and logic

### Post Management
- `PostTable.tsx`: Tabular display of posts with sorting and filtering
- `PostPagination.tsx`: Pagination controls for post navigation

### UI Components
- `Navbar.tsx`: Navigation component with theme toggle
- `Sidebar.tsx`: Collapsible sidebar navigation
- `ThemeToggle.tsx`: Light/dark mode switcher

### Authentication
- `SessionProviders.tsx`: Session management wrapper
- `ThemeProviderWrapper.tsx`: Theme context provider

## 📊 Data Management

The application includes:
- `analytics.ts`: Analytics data processing
- `posts.ts`: Post data management utilities
- Custom hooks for data fetching and state management
- TypeScript definitions in the `lib/Types` directory

## 🎨 Styling

- Global styles defined in `globals.css`
- Component-specific styling using CSS modules
- Responsive design principles
- Theme support for light and dark modes

## 🔧 Configuration

- **Routing**: Utilizes Next.js App Router for file-based routing
- **Middleware**: Custom middleware for authentication and redirects
- **API Routes**: RESTful API endpoints for data operations

## 📝 Usage Examples

### Adding a New Page
1. Create a new directory in `src/app/`
2. Add `page.tsx` for the route component
3. Update navigation components if needed

### Creating Custom Components
1. Add new component files in `src/components/`
2. Export from appropriate index files
3. Import and use in your pages

### Managing Authentication
The application uses NextAuth for authentication. Routes are protected using middleware and session providers.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues
- **Authentication not working**: Check your environment variables
- **Styles not loading**: Verify CSS import paths
- **TypeScript errors**: Ensure all dependencies are installed

### Getting Help
- Check the documentation for each technology used
- Review the component implementations for usage examples
- Ensure all environment variables are properly configured

---

Built with ❤️ using Next.js and TypeScript
