import { Link, useParams } from 'react-router-dom';
import ThreadItem from '../components/ThreadItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateThreadDetail } from '../states/threadDetail/action';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';
import CommentList from '../components/CommentList';

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

  const thread = {
    id: threadDetail.id,
    category: threadDetail.category,
    title: threadDetail.title,
    body: threadDetail.body,
    upVotesBy: threadDetail.upVotesBy,
    downVotesBy: threadDetail.downVotesBy,
    createdAt: threadDetail.createdAt,
    owner: threadDetail.owner,
    totalComments: threadDetail.comments.length,
  };

  const comments = [...threadDetail.comments];

  return (
    <section className='bg-white w-[750px] p-[25px] space-y-[35px] my-[50px] min-h-screen'>
      <Link to='/'>
        <ArrowSmallLeftIcon className='w-8 h-8 cursor-pointer' />
      </Link>

      {thread && <ThreadItem {...thread} fontSize='md' />}

      <div className='space-y-[20px]'>
        <h1 className='text-lg font-semibold'>
          Komentar ({thread.totalComments})
        </h1>

        <CommentList comments={comments} />
      </div>
    </section>
  );
}
