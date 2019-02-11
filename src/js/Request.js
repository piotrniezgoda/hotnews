import Render from './Render';

export default function (checkedValue, searchValue) {
  let API_URL;
  if (searchValue === undefined || searchValue === '') {
    API_URL = `https://newsapi.org/v2/top-headlines?country=${checkedValue}&apiKey=314fc35f08b84216baf1a59ca8736a3c`;
  } else {
    API_URL = `https://newsapi.org/v2/top-headlines?country=${checkedValue}&q=${searchValue}&apiKey=314fc35f08b84216baf1a59ca8736a3c`;
  }

  const req = new Request(API_URL);
  fetch(req)
    .then(response => response.json())
    .then((responseObj) => {
      const articlesArray = responseObj.articles;
      return new Render(articlesArray);
    });
}
