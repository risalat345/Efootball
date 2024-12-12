import React from 'react';
import { useLocation } from 'react-router-dom';

function TeamInfo() {
  const location = useLocation();
  const { text, image, name } = location.state || {};

  if (!text || !image) {
    return <div>Error: No profile data found. Please go back and select a profile.</div>;
  }
  return (
    <div>
      <div className='mt-10 mb-10 flex rounded lg h-fit w-full border border-yellow-500 p-5'>
        <div className='w-4/12'>
          <img className='border-r-2 p-5 border-yellow-500' src={image.src} alt={image.alt} style={{ width: '100px' }} />
        </div>
        <div className='flex w-8/12 flex-col justify-center items-start p-2'>
          <p className='font-mono text-[10px]'>Name: <span className='font-bold text-yellow-400'>{text}</span></p>
          <p className='font-mono text-[10px]'>Team Name: <span className='font-bold text-yellow-400'>{name}</span></p>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
