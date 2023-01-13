import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import { Notify } from 'notiflix';

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  const inputData = evt.target.value.trim();
  console.log(inputData);
  if (!inputData) {
    return;
  }
  const resp = fetchCountries(inputData)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 && data.length <= 10) {
      }
      if (data.length === 1) {
        //1 країна
      }
    })
    .catch(err => {
      Notify.failure('Oops, there is no country with that name');
    });
}

// console.log(resp);
