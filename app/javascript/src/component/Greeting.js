import { useSelector } from 'react-redux';
import React from 'react';

export default function Greeting() {
  const { message, isLoading } = useSelector((store) => store.message);
  const txt = isLoading ? 'Loading' : message;

  return (
    <div className="container text-center">
      <p>{txt}</p>
      <span className="text-[10px]">come from react api</span>
    </div>
  );
}