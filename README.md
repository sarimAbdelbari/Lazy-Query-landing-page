# LazyQuery Landing Page

A minimal, developer-focused landing page for LazyQuery - a browser-based tool for visualizing database schemas and query logic.

## Design Features

- **Minimalist aesthetic** inspired by fikrat.tech, Vercel, and Linear
- **Deep blue gradient** background (#00147D → #00527D)
- **Typography**: Inter for body text, JetBrains Mono for headings and technical content
- **Smooth animations** powered by Framer Motion
- **Email collection** via SheetDB integration
- **Fully responsive** design with mobile-first approach

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Email Backend**: SheetDB (connects to Google Sheets)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Email Collection (Optional)

Follow the instructions in [SHEETDB_SETUP.md](./SHEETDB_SETUP.md) to configure email collection via SheetDB.

Quick steps:
1. Create a Google Sheet with "Email" and "Timestamp" columns
2. Sign up at [sheetdb.io](https://sheetdb.io) and connect your sheet
3. Add your SheetDB API URL to `.env.local`:

```bash
NEXT_PUBLIC_SHEETDB_API_URL=https://sheetdb.io/api/v1/YOUR_UNIQUE_ID
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Page Structure

### Hero Section
- LazyQuery logo
- Compelling headline with gradient text effect
- Clear value proposition
- "Get Early Access" CTA button
- Smooth scroll indicator

### How It Works
Three-step process visualization:
1. Connect your database
2. Parse queries in your browser
3. Visualize and explore instantly

Each step features a custom SVG icon and clear description.

### Preview Section
- Abstract database visualization with animated glowing nodes
- Interconnected graph showing data relationships
- Floating particle effects for depth

### Closing CTA
- Reinforced value proposition
- Primary CTA: "Get Early Access"
- Secondary CTA: "Learn more on GitHub"

### Footer
- Brand tagline: "Built for developers who value clarity"
- Social links (GitHub, Twitter)
- Privacy policy link

## Customization

### Update Brand Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #00147D;
  --accent: #00527D;
}
```

### Update Social Links

Edit placeholder URLs in `app/page.tsx`:
- GitHub: Line ~265
- Twitter: Line ~275
- Privacy: Line ~285

### Modify Content

All text content is in `app/page.tsx` - update headlines, descriptions, and CTAs as needed.

## Components

```
app/
├── components/
│   ├── DatabaseVisualization.tsx  # Animated SVG graph
│   ├── EmailModal.tsx             # Email collection modal
│   └── icons/
│       ├── DatabaseIcon.tsx       # Step 1 icon
│       ├── CodeIcon.tsx           # Step 2 icon
│       └── GraphIcon.tsx          # Step 3 icon
├── globals.css                    # Global styles and animations
├── layout.tsx                     # Root layout with fonts
└── page.tsx                       # Main landing page
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable `NEXT_PUBLIC_SHEETDB_API_URL`
4. Deploy

### Other Platforms

The app can be deployed to any Next.js-compatible platform:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## Build for Production

```bash
npm run build
npm start
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized images and SVGs
- CSS animations for smooth 60fps
- Lazy loading with Framer Motion viewport detection
- Minimal JavaScript bundle

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for developers who value clarity.
