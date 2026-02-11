# Valentine 

A web app to ask your partner, "Will you be my Valentine?" Deployed live at [valentine-eta-jet.vercel.app](https://valentine-eta-jet.vercel.app)


## Tech Stack

This project is built with the [T3 Stack](https://create.t3.gg/):

- **[Next.js](https://nextjs.org)** - React framework for production
- **[NextAuth.js](https://next-auth.js.org)** - Authentication library
- **[Drizzle ORM](https://orm.drizzle.team)** - TypeScript-first ORM
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[tRPC](https://trpc.io)** - End-to-end typesafe RPC
- **[Shadcn UI](https://ui.shadcn.com)** - High-quality React components
- **PostgreSQL** - Database (via Docker)

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker (for local database)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexdrivas/valentine.git
   cd valentine
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   Fill in the required environment variables in your `.env` file.

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   └── ui/          # Shadcn UI components
├── server/
│   ├── api/
│   │   ├── routers/ # tRPC route definitions
│   │   └── root.ts  # Root router
│   └── auth.ts      # NextAuth configuration
└── env.js           # Environment variables validation

public/
└── images/          # Image assets (add your photos here)

drizzle/
└── schema.ts        # Database schema definitions
```

## Customization

### Adding Your Photos

1. Add your images to the `public/images/` directory:
   - `us-1.jpg` - First photo
   - `us-2.jpg` - Second photo
   - `us-3.jpg` - Third photo

   **Recommended size:** 800×1000px or similar portrait-style images

2. Update the image sources in `src/app/components/ValentinePage.tsx`:
   ```typescript
   const IMAGE_SRCS = ["/images/us-1.jpg", "/images/us-2.jpg", "/images/us-3.jpg"]; 
   ```

## Deployment

The application is configured for easy deployment to Vercel. See the [T3 Stack deployment guides](https://create.t3.gg/en/deployment/vercel) for detailed instructions on deploying to Vercel, Netlify, or Docker.

## Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [T3 Stack FAQ](https://create.t3.gg/en/faq)
- [Create T3 App GitHub](https://github.com/t3-oss/create-t3-app)

## License

MIT