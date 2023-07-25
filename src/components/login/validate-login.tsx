export const validateEmail = new RegExp('^[\\w.-]+@[a-zA-Z\\d.-]+\\.[a-zA-Z]{2,}$');

export const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
