import api from './instance'

const searchWord = async (word) => {
  try {
    const searchResult = await api.get(`/dict/search?word=${word}`)
    return searchResult.data[0];
  } catch(error) {
    if (error.response) {
      console.log('Error: scary status code');
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log('Error: request made but no response received');
      console.log(error.request);
    } else {
      console.log('Error setting up request');
      console.log(error.message);
    }
  }
}

export default searchWord;