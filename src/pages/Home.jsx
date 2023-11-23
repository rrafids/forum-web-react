import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadList from '../components/ThreadList';
import CategoryList from '../components/CategoryList';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Home() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
  }));

  const categoryList = threads
    .filter((thread, index, self) => self.indexOf(thread) === index)
    .map((thread) => ({
      id: thread.id,
      name: thread.category,
    }));

  return (
    <section className='bg-white w-[750px] p-[25px] space-y-[25px] my-[50px] min-h-screen'>
      <div>
        <h1>Kategori</h1>
        <CategoryList categories={categoryList} />
      </div>
      <h1 className='font-semibold text-2xl'>Beranda</h1>
      <ThreadList threads={threadList} />

      {authUser && (
        <Link to='/create-thread'>
          <button className='fixed bottom-[90px] right-[40px]'>
            <PlusCircleIcon className='w-12 h-12' />
          </button>
        </Link>
      )}
    </section>
  );
}
