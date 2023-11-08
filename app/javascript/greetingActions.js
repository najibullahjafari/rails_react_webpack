// app/javascript/actions/greetingActions.js
import axios from 'axios';

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios.get('/api/random_greeting')
      .then((response) => {
        dispatch({ type: 'FETCH_RANDOM_GREETING', payload: response.data.greeting });
      })
      .catch((error) => {
        console.error('Error fetching random greeting:', error);
      });
  };
};
