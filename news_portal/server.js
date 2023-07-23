// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (replace this with a database)
let newsArticles = [
  { id: 1, title: 'Sample Article 1', content: 'This is the content of article 1.' },
  { id: 2, title: 'Sample Article 2', content: 'This is the content of article 2.' },
  { id: 3, title: 'Sample Article 3', content: 'This is the content of article 3.' },
];

app.use(cors());
app.use(bodyParser.json());

// Route to fetch all news articles
app.get('/api/articles', (req, res) => {
  res.json({ articles: newsArticles });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
