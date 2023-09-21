export const dataFetching = async (api, option) => {

  const respons = await fetch(api, option);
  const data = await respons.json();
  return data;
}

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_MY_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youTubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_MY_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}