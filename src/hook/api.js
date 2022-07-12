const url = 'https://restcountries.com/v3.1/';

function setUrl(endpoint) {
  return `${url}${endpoint}`;
}

export default setUrl;
