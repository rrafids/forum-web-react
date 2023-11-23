import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

export default function CommentInput({ submit }) {
  const [content, onContentChange, setContent] = useInput('');
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = () => {
    submit({ content });
    setContent('');
    navigate(location.pathname);
  };

  return (
    <div>
      <textarea
        className='w-full border border-gray-400 rounded px-3 py-2 mb-[10px]'
        type='text'
        value={content}
        onChange={onContentChange}
        placeholder='Tuliskan komentar'
      ></textarea>
      <button
        className='w-full bg-black text-white px-3 py-2 rounded'
        type='button'
        onClick={onSubmit}
      >
        Kirim
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  submit: PropTypes.func.isRequired,
};
