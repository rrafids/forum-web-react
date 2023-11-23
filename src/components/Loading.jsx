import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className='fixed w-full h-1 top-0 z-10 '>
      <LoadingBar />
    </div>
  );
}

export default Loading;
