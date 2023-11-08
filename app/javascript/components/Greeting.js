import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/api/random_greeting').then((response) => {
      setGreeting(response.data.greeting);
    });
  }, []);

  return <div>{greeting}</div>;
};

export default Greeting;