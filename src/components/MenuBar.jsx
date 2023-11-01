import {
  ArrowRightCircleIcon,
  ChatBubbleLeftRightIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { userModel } from '../models';

export default function MenuBar({ authUser, signOut }) {
  const location = useLocation();
  const activeMenu = location.pathname;

  return (
    <div className='bg-white flex place-content-center fixed bottom-0 w-full border p-[5px]'>
      <div className='grid grid-cols-2 gap-[30px] text-sm'>
        <Link to='/'>
          <div
            className={`${
              activeMenu === '/' && 'bg-gray-200 rounded-lg'
            } flex flex-col items-center cursor-pointer p-2`}
          >
            <ChatBubbleLeftRightIcon className='h-5 w-5' />
            <h1>Threads</h1>
          </div>
        </Link>
        {/* <Link to='/leaderboards'>
          <div
            className={`${
              activeMenu === '/leaderboards' && 'bg-gray-200 rounded-lg'
            } flex flex-col items-center cursor-pointer p-2`}
          >
            <ChartBarIcon className='h-5 w-5' />
            <h1>Leaderboards</h1>
          </div>
        </Link> */}
        {authUser ? (
          <button onClick={signOut}>
            <div className='flex flex-col items-center cursor-pointer p-2'>
              <PowerIcon className='h-5 w-5' />
              <h1>Logout</h1>
            </div>
          </button>
        ) : (
          <Link to='/login'>
            <div
              className={`${
                activeMenu === '/login' && 'bg-gray-200 rounded-lg'
              } flex flex-col items-center cursor-pointer p-2`}
            >
              <ArrowRightCircleIcon className='h-5 w-5' />
              <h1>Login</h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

MenuBar.propTypes = {
  authUser: PropTypes.shape(userModel),
  signOut: PropTypes.func.isRequired,
};
