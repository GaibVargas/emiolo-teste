export const setStore = (user) => {
  if (!user) return;
  const content = JSON.stringify(user);
  return window.localStorage.setItem('@teste.user', content);
}

export const getStore = () => {
  return JSON.parse(window.localStorage.getItem('@teste.user'));
}

export const removeUser = () => {
  return window.localStorage.removeItem('@teste.user');
}