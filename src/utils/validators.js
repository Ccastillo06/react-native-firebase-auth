const PASSWORD_REGEX = /^(?!.*[\s])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
export const isValidPassword = password => PASSWORD_REGEX.test(password);

const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
export const isValidEmail = email => EMAIL_REGEX.test(email);
