const MIN_PASSWORD_LENGTH = 6;

export function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function passwordIsValid(password) {
  return password.length >= MIN_PASSWORD_LENGTH;
}
