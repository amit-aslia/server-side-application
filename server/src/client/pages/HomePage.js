import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I am the Home Component</div>
      <button onClick={() => console.log('Hello world!!!')}>Press me!</button>
    </div>
  ); 
};

export default {
  component: Home
};