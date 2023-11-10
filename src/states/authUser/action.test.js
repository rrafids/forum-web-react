import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import { asyncSetAuthUser, asyncUnsetAuthUser, setAuthUserActionCreator, unsetAuthUserActionCreator } from "./action";

const fakeAuthUserResponse = {
  id: "john_doe",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg"
};

const fakeLoginResponse = "sample-jwt-token";

const fakeErrorResponse = new Error('Something went wrong!');

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => { });

  it('should dispatch action correctly when set auth user success', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.resolve(fakeLoginResponse);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({ email: "john@example.com", password: "sample-password" })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
  });

  it('should dispatch action and call alert correctly when set auth user failed', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncSetAuthUser({ email: "john@example.com", password: "sample-password" })(dispatch);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });

  afterEach(() => { });
});

describe('asyncUnsetAuthUser thunk', () => {
  beforeEach(() => { });

  it('should dispatch action correctly when unset auth user success', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.resolve(fakeLoginResponse);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    asyncUnsetAuthUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
  });

  afterEach(() => { });
});