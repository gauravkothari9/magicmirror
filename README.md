# AURA Mirror — Client

> React 18 + Vite frontend, deployed on Vercel.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in your deployed server URL
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | URL of your deployed Express backend (e.g. `https://aura-server.vercel.app`) |

## Deploy to Vercel

1. Push this `client/` folder to its own GitHub repo
2. Import the repo on [vercel.com](https://vercel.com)
3. Add `VITE_API_URL` in **Settings → Environment Variables**
4. Vercel will auto-detect Vite and run `npm run build` → output `dist/`

> The included `vercel.json` handles SPA routing (all paths → `index.html`).
