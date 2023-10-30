import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';
import { useDispatch } from 'react-redux';

export default function CreateThread() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));

    navigate('/');
  };

  return (
    <section className='bg-white w-[750px] p-[25px] space-y-[25px] my-[50px] min-h-screen'>
      <h1 className='font-semibold text-2xl'>Buat Thread Baru</h1>

      <ThreadInput thread={onSubmit} />
    </section>
  );
}
