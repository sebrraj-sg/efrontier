# efrontier

A full-stack starter project.

## Projects

- **backend** — FastAPI + MongoDB API server
- **frontend** — React web client

## Setup

### Backend
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env   # fill in your values
uvicorn server:app --reload --port 8001
```

### Frontend
```bash
cd frontend
yarn install
cp .env.example .env   # fill in your values
yarn start
```

## Environment

Real `.env` files are gitignored. Copy each `.env.example` to `.env` and fill in your own values.
