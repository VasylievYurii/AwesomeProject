import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректну адресу електронної пошти")
    .required("Введіть адресу електронної пошти")
    .matches(/^\S*$/, "Пробіли не дозволені в адресі електронної пошти"),
  password: Yup.string()
    .required("Введіть пароль")
    .matches(/^\S*$/, "Пробіли не дозволені в паролі"),
});
