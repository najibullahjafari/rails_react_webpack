import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = ({ message, dispatch }) => {
  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.greetings.message,
});

export default connect(mapStateToProps)(Greeting);
