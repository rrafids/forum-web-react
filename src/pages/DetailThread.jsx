import { Link, useParams } from 'react-router-dom';
import ThreadItem from '../components/ThreadItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateThreadDetail } from '../states/threadDetail/action';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';

export default function DetailThread() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadDetail({ threadId: id }));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  return (
    <section className='bg-white w-[750px] p-[25px] space-y-[25px] my-[50px] min-h-screen'>
      <Link to='/'>
        <ArrowSmallLeftIcon className='w-8 h-8 cursor-pointer' />
      </Link>

      {threadDetail && <ThreadItem {...threadDetail} />}
    </section>
  );
}
