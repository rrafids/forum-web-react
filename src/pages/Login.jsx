import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <section className='bg-white h-[500px] w-[750px] p-[50px] space-y-[25px] flex flex-col place-content-center min-h-screen'>
      <h1 className='text-3xl'>
        <span className='font-bold'>Forum</span>
        <span className='font-extrabold'>&nbsp;.&nbsp;</span>
        <span>app</span>
      </h1>
      <LoginInput login={onLogin} />
      <p>
        Don&apos;t have an account?{' '}
        <Link className='underline underline-offset-1' to='/register'>
          Register
        </Link>
      </p>
    </section>
  );
}
