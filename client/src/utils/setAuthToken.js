import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token-rufo'] = token;
    //localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['x-auth-token-rufo'];
    // localStorage.removeItem('token');
  }
};

export default setAuthToken;
