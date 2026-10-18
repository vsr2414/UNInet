# UNInet Backend API

The UNInet backend provides API endpoints for the UNInet university student questions-and-answers platform.

## Requirements

- Node.js
- npm

## Installation

From the `server` directory, install dependencies:

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the `server` directory using `.env.example` as a reference.

Available variables:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `5000` | Backend server port |
| `CLIENT_URL` | `http://localhost:5173` | Allowed frontend origin for CORS |

## Run in Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Run Tests

```bash
npm test
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/api` | API information and endpoint list |
| GET | `/api/health` | Health check |

## Security and Error Handling

- Helmet adds HTTP security headers.
- CORS is configured using `CLIENT_URL`.
- JSON request bodies are limited to 10 KB.
- Requests receive a unique request ID.
- Unknown routes return HTTP 404.
- Invalid JSON and oversized request bodies return appropriate client errors.
- Unexpected server errors return a generic HTTP 500 response.

## Testing

Automated API tests use Node.js's test runner and Supertest.
