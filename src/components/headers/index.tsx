// index.tsx
import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Home: React.FC = () => {
  return (
    <div className="justify-center w-full mx-auto bg-gray-100 border-b">
      <Banner />
      <Navbar />
      {/* Add more sections like About, Services, Projects, etc. here */}
    </div>
  );
};

export default Home;
