import {
  ArrowRightCircleIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <div className='bg-white flex place-content-center fixed bottom-0 w-full border p-[10px]'>
      <div className='flex space-x-[40px] text-sm'>
        <Link to='/'>
          <div className='flex flex-col items-center cursor-pointer'>
            <ChatBubbleLeftRightIcon className='h-5 w-5' />
            <h1>Threads</h1>
          </div>
        </Link>
        <div className='flex flex-col items-center cursor-pointer'>
          <ChartBarIcon className='h-5 w-5' />
          <h1>Leaderboards</h1>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <ArrowRightCircleIcon className='h-5 w-5' />
          <h1>Login</h1>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
          <PowerIcon className='h-5 w-5' />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}
