import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducer function', () => {
  it('should return the initial state when given by UNKNOWN function', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the auth user when given by SET_AUTH_USER function', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: "john_doe",
          name: "John Doe",
          email: "john@example.com",
          avatar: "https://generated-image-url.jpg"
        }
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  })

  it('should return null when given by UNSET_AUTH_USER function', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.UNSET_AUTH_USER,
      payload: null
    }

    // action
    const nextState = authUserReducer(initialState, action)

    // assert
    expect(nextState).toEqual(null)
  });
});