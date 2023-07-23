// script.js
const newsArticlesElement = document.getElementById('news-articles');

// Function to fetch news articles from the backend API
function fetchNewsArticles() {
  fetch('http://localhost:3000/api/articles') // Replace with the actual backend URL
    .then((response) => response.json())
    .then((data) => {
      // Loop through the articles and create HTML elements to display them
      data.articles.forEach((article) => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = article.content;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        newsArticlesElement.appendChild(articleElement);
      });
    })
    .catch((error) => {
      console.error('Error fetching news articles:', error);
    });
}

// Call the function to fetch and display news articles
fetchNewsArticles();
