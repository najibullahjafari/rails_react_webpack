import React, { useEffect, useState } from 'react';

function Greeting() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <div>{message}</div>;
}

export default Greeting;