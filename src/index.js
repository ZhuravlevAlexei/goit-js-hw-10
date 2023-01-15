import './css/styles.css';
import './css/additional-styles.css';

import { fetchCountries } from './js/fetchCountries';
import {
  createCountryList,
  createCountryInfo,
  clearCountryList,
  clearCountryInfo,
} from './js/library.js';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import { Notify } from 'notiflix';

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  const inputData = evt.target.value.trim();

  if (!inputData) {
    clearCountryList();
    clearCountryInfo();
    return;
  }
  const resp = fetchCountries(inputData)
    .then(data => {
      if (data.length > 10) {
        clearCountryInfo();
        clearCountryList();

        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 && data.length <= 10) {
        clearCountryInfo();
        createCountryList(data);
      }
      if (data.length === 1) {
        clearCountryList();
        createCountryInfo(data);
      }
    })
    .catch(err => {
      clearCountryInfo();
      clearCountryList();
      Notify.failure('Oops, there is no country with that name');
    });
}
