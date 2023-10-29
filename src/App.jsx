import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import RegisterPage from './pages/Register';
import DetailPage from './pages/DetailThread';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import CreateThread from './components/CreateThread';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <div>
        <Header />
        <main className='bg-gray-200 h-full flex flex-col items-center min-h-screen place-content-center'>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/threads/:id' element={<DetailPage />} />
            <Route path='/create-thread' element={<CreateThread />} />
          </Routes>
        </main>
        <MenuBar authUser={authUser} signOut={onSignOut} />
      </div>
    </>
  );
}

export default App;
