function getToken() {
    const user = JSON.parse(localStorage.getItem('tl-iui-user'));
    if (user && user.token) {
      return { 'Auth-token': user.token };
    } else {
      return false;
    }
  }
    
function getUser() {
  const user = JSON.parse(localStorage.getItem('tl-iui-user'));
  if (user && user.token) {
    return user;
  } else {
    return false;
  }
}
  
function setToken(user) {
  localStorage.setItem('tl-iui-user', JSON.stringify(user));
}
  
function deleteToken() {
  localStorage.removeItem('tl-iui-user');
}
  
export const auth = {
  getToken,
  getUser,
  setToken,
  deleteToken
};