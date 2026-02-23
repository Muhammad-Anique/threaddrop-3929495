# ThreadDrop

A premium streetwear landing page with waitlist functionality and WhatsApp integration.

![ThreadDrop](https://img.shields.io/badge/ThreadDrop-Streetwear%20Drops-black?style=for-the-badge)

## Features

- **Premium Hero Section** — Countdown timer to next drop with "Notify Me" CTA
- **Product Showcase** — Grid display of T-shirt collection with size options
- **Lead Capture Form** — Name and email waitlist powered by Supabase
- **WhatsApp Integration** — Floating CTA button for direct customer communication
- **Responsive Design** — Mobile-first approach optimized for Gen Z users
- **Minimalist Streetwear Aesthetic** — Bold typography, heavy whitespace, premium feel

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [Supabase](https://supabase.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## Project Structure

```
/
├── app/
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Tailwind directives and global styles
├── components/
│   ├── Navbar.tsx        # Fixed navigation with scroll effects
│   ├── Hero.tsx          # Hero section with countdown timer
│   ├── ProductShowcase.tsx  # Product grid and features
│   ├── LeadForm.tsx      # Waitlist form with Supabase integration
│   ├── Footer.tsx        # Site footer with links
│   └── WhatsAppCTA.tsx   # Floating WhatsApp button
├── lib/
│   └── supabaseClient.ts # Supabase client configuration
├── supabase/
│   └── migrations/       # Database schema migrations
└── public/               # Static assets
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```

Get these values from your [Supabase Dashboard](https://app.supabase.com/) under Project Settings → API.

## Database Schema

The application uses a `leads` table to store waitlist submissions:

| Column      | Type      | Description                    |
|-------------|-----------|--------------------------------|
| id          | UUID      | Primary key (auto-generated)   |
| name        | Text      | User's full name               |
| email       | Text      | User's email (unique)          |
| created_at  | Timestamp | Submission timestamp           |
| updated_at  | Timestamp | Last update timestamp          |

### Row Level Security (RLS)

- **Insert:** Public (anyone can join the waitlist)
- **Select:** Authenticated users only (admin access)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Muhammad-Anique/threaddrop-3929495.git
   cd threaddrop-3929495
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Muhammad-Anique/threaddrop-3929495)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Environment Variables on Vercel

After deployment, add these environment variables in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## WhatsApp Integration

The WhatsApp CTA button links directly to:
```
https://wa.me/923204589040
```

This opens WhatsApp with a pre-filled chat to the business number.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the streetwear palette:

```typescript
colors: {
  black: '#0a0a0a',
  white: '#fafafa',
  'washed-grey': '#8a8a8a',
  'off-white': '#f0f0f0',
  // ... grey scale
}
```

### Products

Update the products array in `components/ProductShowcase.tsx` to change displayed items.

### Countdown Timer

Modify the drop date in `components/Hero.tsx`:

```typescript
const dropDate = new Date()
dropDate.setDate(dropDate.getDate() + 7) // 7 days from now
```

## License

MIT License — feel free to use this project for your own drops!

---

Built with ❤️ for the streetwear community.