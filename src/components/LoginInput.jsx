import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className='text-sm'>
      <input
        className='w-full border border-gray-400 rounded px-3 py-2 mb-[10px]'
        type='text'
        value={email}
        onChange={onEmailChange}
        placeholder='Email'
      />
      <input
        className='w-full border border-gray-400 rounded px-3 py-2 mb-[15px]'
        type='password'
        value={password}
        onChange={onPasswordChange}
        placeholder='Password'
      />
      <br />
      <button
        className='w-full bg-black text-white p-3 rounded font-semibold'
        type='button'
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
