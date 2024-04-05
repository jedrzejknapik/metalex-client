export const TOKEN_KEY = 'token';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const useToken = () => {
  const token = getToken();

  const removeToken = () => {
    return localStorage.removeItem(TOKEN_KEY);
  };

  const setToken = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY, newToken);
  };

  return {
    token,
    removeToken,
    setToken,
  };
};
