import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import LoginInput from './LoginInput';
import userEvent from '@testing-library/user-event';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // action
    await userEvent.type(emailInput, 'email@test.com');

    // assert
    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(emailInput, 'password123');

    // assert
    expect(emailInput).toHaveValue('password123');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);

    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'email@test.com');

    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'password123');

    const loginButton = screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'email@test.com',
      password: 'password123',
    });
  });

  afterEach(() => {
    cleanup();
  });
});
