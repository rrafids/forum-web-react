import {
  ChatBubbleBottomCenterTextIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { threadModel } from '../models';

export default function ThreadItem({
  id,
  category,
  title,
  body,
  upVotesBy,
  downVotesBy,
  totalComments,
  createdAt,
  owner,
}) {
  return (
    <div className='space-y-[15px]'>
      <div key={id} className='flex flex-col space-y-[10px]'>
        <div className='border border-gray-600 rounded p-[5px] cursor-pointer w-max'>
          <p className='text-xs'>#{category}</p>
        </div>
        <a href={`/threads/${id}`} className='font-semibold'>
          {title}
        </a>
        <p
          className='text-sm'
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        ></p>
        <div className='flex space-x-[15px] text-gray-600 text-sm'>
          <div className='flex space-x-[5px]'>
            <HandThumbUpIcon className='h-5 w-5' />
            <p>{upVotesBy.length}</p>
          </div>
          <div className='flex space-x-[5px]'>
            <HandThumbDownIcon className='h-5 w-5' />
            <p>{downVotesBy.length}</p>
          </div>
          <div className='flex space-x-[5px]'>
            <ChatBubbleBottomCenterTextIcon className='h-5 w-5' />
            <p>{totalComments}</p>
          </div>
          <p>{postedAt(createdAt)}</p>
          <p>
            Dibuat oleh <span className='font-semibold'>{owner.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadModel,
  like: PropTypes.func,
};
