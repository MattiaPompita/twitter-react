import React from 'react';

const MainSection = ({ children, name }) => {
  return (
    <div className="h-screen text-white border-r border-gray-600 border-solid w-2/3 px-4 py-2">
      <h1 className='text-2xl font-semibold'>{name}</h1>
      {children}
    </div>
  );
};

export default MainSection;
