import CLIENT_KEY from './api.js';
async function fetchUrl(query) {
  let url;
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?orientation=landscape&query=${query}&fit=crop&w=210&h=140&client_id=${CLIENT_KEY}`
    );
    const jsonRes = await response.json();

    url = await jsonRes.urls.small;
  } catch (error) {
    console.error(error);
    url = 'https://www.pcma.org/wp-content/uploads/2019/08/Travel-tips.png';
  }

  return url;
}

export default fetchUrl;
