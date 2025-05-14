# News Proxy Backend

This is a simple Node.js and Express backend proxy server for fetching news articles from the [NewsAPI](https://newsapi.org/).  
It allows your frontend (even when hosted) to access NewsAPI data, bypassing CORS and API key exposure issues.

---

## Features

- Proxies requests from your frontend to NewsAPI
- Hides your NewsAPI key from the frontend
- Handles CORS (allows requests from any origin)
- Easy to deploy on Render, Heroku, Railway, etc.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/news-proxy-backend.git
   cd news-proxy-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set your NewsAPI key:**
   - Edit `server.js` and set your NewsAPI key, or
   - (Recommended) Set it as an environment variable:
     ```bash
     export NEWS_API_KEY=your_newsapi_key
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on [http://localhost:5000](http://localhost:5000) by default.

---

## Usage

Send GET requests to the `/news` endpoint with query parameters:

```
GET /news?country=us&category=general&page=1&pageSize=9
```

**Example using fetch in your frontend:**
```js
fetch('http://localhost:5000/news?country=us&category=general&page=1&pageSize=9')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## Deployment

You can deploy this backend to any Node.js-friendly platform (Render, Heroku, Railway, Vercel, etc.).

1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Create a new web service on your chosen platform.
3. Set the `NEWS_API_KEY` environment variable in your deployment settings.
4. Use the deployed URL in your frontend.

---

## Environment Variables

- `NEWS_API_KEY` (required): Your NewsAPI key.

---

## License

This project is licensed under the ISC License.

---

## Acknowledgements

- [Express](https://expressjs.com/)
- [NewsAPI](https://newsapi.org/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [cors](https://www.npmjs.com/package/cors)
