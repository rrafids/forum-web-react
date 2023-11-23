import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadModel } from '../models';

export default function ThreadList({ threads }) {
  return (
    <div className='space-y-[15px]'>
      {threads.map((thread) => (
        <div key={thread.id}>
          <hr className='mb-[10px]' />
          <ThreadItem {...thread} />
        </div>
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadModel)).isRequired,
};
