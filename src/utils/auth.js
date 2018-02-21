// @flow
const LOGIN_KEY = 'materialisticLogin';

export const login = (login: string): void => {
  localStorage.setItem(LOGIN_KEY, login);
};

export const isLoggedIn = (): string => !!localStorage.getItem(LOGIN_KEY);
