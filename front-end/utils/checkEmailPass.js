export const checkPassword = (password) => {
  if (password === '') return false;
  if (password !== '') {
    if (password.trim().length >= 6) {
      return true;
    } else {
      return false;
    }
  }
};

export const checkEmail = (email) => {
  let emailRegex = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

  if (email === '') return false;
  if (email !== '') {
    if (emailRegex.test(email.trim())) {
      return true;
    } else {
      return false;
    }
  }
};
