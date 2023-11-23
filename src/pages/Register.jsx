import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <section className='bg-white h-[500px] w-[750px] p-[50px] space-y-[25px] flex flex-col place-content-center min-h-screen'>
      <h1 className='text-3xl'>
        <span className='font-bold'>Forum</span>
        <span className='font-extrabold'>&nbsp;.&nbsp;</span>
        <span>app</span>
      </h1>
      <RegisterInput register={onRegister} />
      <p>
        Already have an account?{' '}
        <Link className='underline underline-offset-1' to='/login'>
          Login
        </Link>
      </p>
    </section>
  );
}
