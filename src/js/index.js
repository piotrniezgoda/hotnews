/* eslint-disable func-names */
import makeRequest from './Request';

require('../index.html');
require('../about.html');
require('../scss/style.scss');


window.addEventListener('load', () => {
  const regionInputs = document.querySelectorAll('input[name="region"]');
  const checkedInputValue = document.querySelector('input[name="region"]:checked').value;
  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');

  let newCheck;

  makeRequest(checkedInputValue);


  regionInputs.forEach((input) => {
    input.addEventListener('change', function () {
      newCheck = this.value;
      const searchInputValue = searchInput.value;
      makeRequest(this.value, searchInputValue);
    });
  });

  function searchInputRequest() {
    const searchInputValue = searchInput.value;
    if (searchInputValue !== '') {
      makeRequest(newCheck || checkedInputValue, searchInputValue);
    }
  }

  searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) searchInputRequest();
    if (searchInput.value === '') {
      makeRequest(newCheck, searchInput.value);
    }
  });

  searchButton.addEventListener('click', searchInputRequest);
}); // End IIFE
