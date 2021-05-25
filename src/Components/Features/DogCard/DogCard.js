import React from 'react';

const DogCard = (props) => {
  const { firstName, typeName, age } = props;
  return (
    <div
      style={
        age >= 4
          ? { border: '5px solid green' }
          : { border: '5px solid yellow' }
      }
    >
      <h2>first Name: {firstName}</h2>
      <h2>type name: {typeName}</h2>
      <h2>age: {age}</h2>
    </div>
  );
};

export default DogCard;
