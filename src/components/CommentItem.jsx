import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import { commentModel } from '../models';
import { postedAt } from '../utils';

export default function CommentItem({
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <div className='mt-[15px] space-y-[15px]'>
      <div className='space-y-[15px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-[10px]'>
            <img src={owner.avatar} className='rounded-full w-10 h-10' />
            <h1>{owner.name}</h1>
          </div>
          <p>{postedAt(createdAt)}</p>
        </div>
        <p
          className='line-clamp-5'
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></p>
        <div className='flex space-x-[15px] text-gray-600'>
          <div className='flex items-center space-x-[5px]'>
            <HandThumbUpIcon className='h-5 w-5' />
            <p>{upVotesBy.length}</p>
          </div>
          <div className='flex items-center space-x-[5px]'>
            <HandThumbDownIcon className='h-5 w-5' />
            <p>{downVotesBy.length}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

CommentItem.propTypes = {
  ...commentModel,
};
