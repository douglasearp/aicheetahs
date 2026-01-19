# Quick Start Guide

Get your AI Cheetahs site up and running in minutes!

## Prerequisites

Make sure you have installed:
- Node.js 18 or higher
- npm 10 or higher

Check your versions:
```bash
node --version
npm --version
```

## Installation & Setup

1. **Install all dependencies:**

```bash
npm install
```

This will install dependencies for the root workspace and all apps.

2. **Start the development server:**

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**

```bash
npm run build
```

4. **Start production server:**

```bash
npm run start
```

## What's Included

✅ **Hero Page** with your custom image  
✅ **Responsive Design** - works on mobile, tablet, and desktop  
✅ **Modern UI** with Tailwind CSS  
✅ **Smooth Animations** and transitions  
✅ **SEO Optimized** with proper metadata  
✅ **Type-Safe** with TypeScript  
✅ **Code Quality** with ESLint  

## Project Layout

```
AICheetahs/
├── apps/web/                    # Main Next.js app
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx      # Root layout
│   │   │   ├── page.tsx        # Home page
│   │   │   └── globals.css     # Global styles
│   │   └── components/
│   │       └── Hero.tsx        # Hero component
│   ├── public/
│   │   └── hero-image.png      # Your hero image
│   └── package.json
├── package.json                 # Root package.json
└── turbo.json                  # Turborepo config
```

## Customization Tips

### Change Colors

Edit `apps/web/tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  cheetah: {
    cyan: '#00d4ff',  // Change this
    blue: '#0084ff',  // And this
  },
}
```

### Edit Hero Text

Edit `apps/web/src/components/Hero.tsx` to change:
- Headlines
- Subheadlines  
- Button text
- CTA actions

### Add New Pages

Create new files in `apps/web/src/app/` following Next.js App Router conventions:
- `about/page.tsx` for `/about`
- `contact/page.tsx` for `/contact`
- etc.

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Need Help?

- 📚 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- ⚡ [Turborepo Docs](https://turbo.build/repo/docs)

---

Happy coding! 🚀

