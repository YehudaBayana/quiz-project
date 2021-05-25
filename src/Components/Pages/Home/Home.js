import React from 'react';
import DogCard from '../../Features/DogCard';

const Home = () => {
  const dogs = [
    { firstName: 'king', typeName: 'lavrador', age: 3 },
    { firstName: 'tyson', typeName: 'pitbull', age: 10 },
    { firstName: 'loca', typeName: 'doberman', age: 7 },
    { firstName: 'ash', typeName: 'pudel', age: 1 },
  ];
  return (
    <div>
      {dogs.map((dog) => {
        return (
          <DogCard
            firstName={dog.firstName}
            typeName={dog.typeName}
            age={dog.age}
          />
        );
      })}
    </div>
  );
};

export default Home;
