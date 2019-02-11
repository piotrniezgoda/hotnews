/* eslint-disable arrow-parens */
const imagePlaceholder = '../images/app-bg.jpg';
class buildGrid {
  constructor(articlesArray) {
    this.articles = articlesArray;
    this.main = document.querySelector('#main');
    this.section = document.createElement('section');
    this.section.classList.add('news');
    while (this.main.firstChild) {
      this.main.removeChild(this.main.firstChild);
    }
    this.insertData();
  }

  insertData() {
    this.articles.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.classList.add('news__article');
      articleElement.innerHTML = `
        <header>
          <img src="${article.urlToImage || imagePlaceholder}" class="article__image">
          <h2 itemprop="headline" class="article__title"><a target="_blank" class="article__link" href="${article.url}">${article.title}</a></h2>
        </header>
        <div class="article__text-container">
          <p class="article__desc">${article.description}</p>
          <footer class="article__source-container">
            <p class="article__source">Source: ${article.source.name}</p>
            <p class="article__source">Author: ${article.author || '(no data)'}</p>
            <p class="article__source">Date of publication: <time datetime="${article.publishedAt.slice(0, 10)}">${article.publishedAt.slice(0, 10)}</time></p>
          </footer>
        </div>
      `;
      this.section.appendChild(articleElement);
    });

    this.main.appendChild(this.section);
  }
}

export default buildGrid;
