import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ThreadItem from '../components/ThreadItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateThreadDetail } from '../states/threadDetail/action';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import { asyncAddComment } from '../states/comments/action';

export default function DetailThread() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateThreadDetail({ threadId: id }));
  }, [id, dispatch]);

  const onSubmitComment = ({ content }) => {
    dispatch(asyncAddComment({ threadId: id, content }));
    dispatch(asyncPopulateThreadDetail({ threadId: id }));
  };

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

      {authUser && (
        <div className='space-y-[10px]'>
          <h1 className='text-lg font-semibold'>Beri Komentar</h1>

          <CommentInput submit={onSubmitComment} />
        </div>
      )}

      <div className='space-y-[20px]'>
        <h1 className='text-lg font-semibold'>
          Komentar ({thread.totalComments})
        </h1>

        <CommentList comments={comments} />
      </div>
    </section>
  );
}
