import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}


function asyncPopulateThreadDetail({ threadId }) {
  return async (dispatch) => {
    try {
      const threadDetail = await api.getThreadById({ threadId });

      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  asyncPopulateThreadDetail,
};
