const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function createCountryList(countries) {
  console.log(countries);
  countryList.innerHTML = countries
    .map(
      ({ flags: { svg }, name: { common } }) => `      
      <li class = "js-country-list">
        <img src="${svg}" alt="State flag" width='24' height='24'>
        <p class = "js-country-text">${common}</p>
      </li>`
    )
    .join('');
}

export function createCountryInfo(country) {
  countryInfo.innerHTML = country
    .map(
      ({
        flags: { svg },
        name: { common },
        capital,
        population,
        languages,
      }) => `<div class = "js-country-card">       
   <img src="${svg}" alt="State flag" width='24' height='24' >
    <p>${common}</p>
    </div>
      <ul class = "js-info-card">
        <li>
          <p class = "js-info-header">Capital: <span class ="js-info-text">${capital}</span></p>
        </li>
        <li>
          <p class = "js-info-header">Population: <span class ="js-info-text">${population.toLocaleString(
            'uk'
          )}</span></p>
        </li>
        <li>
          <p class = "js-info-header">Languages: <span class ="js-info-text">${Object.values(
            languages
          ).join(', ')}</span></p>
        </li>
      </ul>`
    )
    .join('');
}
export function clearCountryList() {
  countryList.innerHTML = '';
}
export function clearCountryInfo() {
  countryInfo.innerHTML = '';
}
