# AI Institute - Coming Soon Page

A modern, animated coming soon page for the AI Institute built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern glassmorphism design with black and yellow theme
- ⚡ Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- ⏰ Live countdown timer
- 📸 Instagram reels showcase
- 📝 Zoho Forms integration ready
- 📊 Zoho PageSense analytics ready
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Countdown Timer
Update the target date in `app/components/Hero.tsx`:
```typescript
const targetDate = new Date('2024-12-31T00:00:00').getTime()
```

### Zoho Integration

#### Zoho Forms
Replace the form submission logic in `app/components/ZohoForm.tsx` with your Zoho Forms API endpoint:
```typescript
// Replace the console.log with actual Zoho Forms API call
const response = await fetch('YOUR_ZOHO_FORMS_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

#### Zoho PageSense
Add your Zoho PageSense tracking code to `app/layout.tsx`:
```typescript
// Add to the <head> section
<script
  dangerouslySetInnerHTML={{
    __html: `
      // Your Zoho PageSense tracking code here
    `,
  }}
/>
```

### Instagram Integration
Update the Instagram handle and reels data in `app/components/InstagramShowcase.tsx`:
```typescript
const reels = [
  // Update with your actual reel data
]
```

### Colors
Customize the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'ai-yellow': '#FFD700', // Change to your preferred yellow
  'ai-dark': '#0A0A0A',   // Change to your preferred dark color
  'ai-gray': '#1A1A1A',   // Change to your preferred gray
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

Then deploy the `out` folder to your hosting platform.

## Performance

- Optimized images and animations
- Lazy loading for components
- Minimal bundle size
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your projects!