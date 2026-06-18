# PlanSport00
sport tragedy


A real-time football livescore web application built with **React + Vite**, powered by the [Football-Data.org](https://www.football-data.org/) free API.

## 🗂️ Project Structure

```
livescore/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── MatchCard.jsx          # Single match display card
│   │   ├── MatchList.jsx          # List of matches with filtering
│   │   ├── LeagueFilter.jsx       # Filter bar by competition
│   │   ├── LiveBadge.jsx          # Animated LIVE indicator
│   │   ├── ScoreBoard.jsx         # Score + minute display
│   │   ├── Header.jsx             # App top bar
│   │   └── Loader.jsx             # Loading skeleton
│   ├── hooks/
│   │   ├── useMatches.js          # Fetch + auto-refresh matches
│   │   └── useLiveMatches.js      # Filter only live games
│   ├── services/
│   │   └── footballApi.js         # All API calls (Football-Data.org)
│   ├── utils/
│   │   ├── formatDate.js          # Date/time helpers
│   │   └── statusHelpers.js       # Match status labels
│   ├── styles/
│   │   └── globals.css            # Global CSS variables + resets
│   ├── App.jsx                    # Root component + routing
│   └── main.jsx                   # Vite entry point
├── .env.example                   # Environment variable template
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/livescore.git
cd livescore
npm install
```

### 2. Get a Free API Key

1. Register at [football-data.org](https://www.football-data.org/client/register)
2. Copy your API token from the dashboard

### 3. Set Environment Variables

```bash
cp .env.example .env
# Edit .env and add your API key
```

### 4. Run Development Server

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_FD_API_KEY` | Your Football-Data.org API token |
| `VITE_REFRESH_INTERVAL` | Auto-refresh interval in ms (default: 30000) |

---

## 📡 API: Football-Data.org (Free Tier)

The free tier supports:

| Endpoint | What It Returns |
|---|---|
| `/v4/matches?status=LIVE` | All live matches right now |
| `/v4/matches?status=SCHEDULED` | Today's upcoming matches |
| `/v4/matches?status=FINISHED` | Today's finished matches |
| `/v4/competitions/{code}/matches` | Matches by league |
| `/v4/teams/{id}/matches` | Matches by team |

**Free tier rate limit:** 10 requests/minute · 6 competitions available

### Supported Free Competitions

| Code | Competition |
|---|---|
| `PL` | Premier League |
| `BL1` | Bundesliga |
| `PD` | La Liga |
| `SA` | Serie A |
| `FL1` | Ligue 1 |
| `CL` | Champions League |

---

## 🔄 Live Data Strategy

Matches auto-refresh every **30 seconds** using a polling hook. The refresh interval speeds up to **10 seconds** when live games are detected.

---

## 🛠️ Tech Stack

- **React 18** — UI
- **Vite** — Build tool
- **Football-Data.org API** — Live & scheduled match data
- **CSS Variables** — Theming

---

## 📦 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```
