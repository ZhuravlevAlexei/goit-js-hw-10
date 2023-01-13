export function fetchCountries(name) {
  const URL_KEY = 'https://restcountries.com/v3.1/name/';
  const FILTER_PARAMETERS = '?fields=name,capital,population,flags,languages';
  return fetch(`${URL_KEY}${name}${FILTER_PARAMETERS}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}
