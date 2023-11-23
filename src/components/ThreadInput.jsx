import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ thread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className='text-sm'>
      <input
        className='w-full border border-gray-400 rounded px-3 py-2 mb-[10px]'
        type='text'
        value={title}
        onChange={onTitleChange}
        placeholder='Judul'
      />
      <input
        className='w-full border border-gray-400 rounded px-3 py-2 mb-[10px]'
        type='text'
        value={category}
        onChange={onCategoryChange}
        placeholder='Kategori'
      />
      <textarea
        className='w-full border border-gray-400 rounded px-3 py-2 mb-[15px]'
        type='text'
        value={body}
        onChange={onBodyChange}
        placeholder='Konten'
      ></textarea>
      <br />
      <button
        className='w-full bg-black text-white p-3 rounded font-semibold'
        type='button'
        onClick={() => thread({ title, category, body })}
      >
        Buat
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  thread: PropTypes.func.isRequired,
};

export default ThreadInput;
