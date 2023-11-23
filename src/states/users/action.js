import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
