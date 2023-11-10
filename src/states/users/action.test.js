import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import { asyncRegisterUser } from "./action";

const fakeRegisterUserResponse = {
  "id": "user-123",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://generated-image-url.jpg"
};

const fakeErrorResponse = new Error('Something went wrong!');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => { });

  it('should dispatch action correctly when register success', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.resolve(fakeRegisterUserResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncRegisterUser({ name: "john", email: "john@example.com", password: "sample-password" })(dispatch);

    // assert
  });

  it('should dispatch action correctly when register failed', async () => {
    // arrange
    // stub implementation
    api.register = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncRegisterUser({ name: "john", email: "john@example.com", password: "sample-password" })(dispatch);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });

  afterEach(() => { });
});