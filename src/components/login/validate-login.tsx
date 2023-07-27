export const validateEmail = new RegExp('^[\\w.-]+@[a-zA-Z\\d.-]+\\.[a-zA-Z]{2,}$');

export const validatePassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$');
