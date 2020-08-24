import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Sets the global header to token if token is there
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
