import * as Yup from "yup";

export const validationRegistrationSchema = Yup.object().shape({
  login: Yup.string()
    .required("Введіть логін")
    .matches(/^\S*$/, "Пробіли не дозволені в логіні"),
  email: Yup.string()
    .email("Введіть коректну адресу електронної пошти")
    .required("Введіть адресу електронної пошти")
    .matches(/^\S*$/, "Пробіли не дозволені в адресі електронної пошти"),
  password: Yup.string()
    .required("Введіть пароль")
    .matches(/^\S*$/, "Пробіли не дозволені в паролі"),
});
