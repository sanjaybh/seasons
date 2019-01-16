import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a5c1b13aebeaca2c5e3ef48b61a3d8211973b34ffcf745bb0f09ae1c6f9def22",
      'nahb' : 'yajnas'
  }
});

/*
const searchImages = (term) => {
  //code goes here
}
*/

// Author - 34e39e5c2f447ce52009a515846ca2b6ccc35552bb63de59cf4a6d06728f3f7e

// Sanjay 
// Access Key - a5c1b13aebeaca2c5e3ef48b61a3d8211973b34ffcf745bb0f09ae1c6f9def22
// Secret key - f525c7ae5eacabc69e28f49427f34d54854b4a97a5a0d20e109078fa796a5ed8