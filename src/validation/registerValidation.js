import Joi from "joi";
import validation from "./validation";

const registerSchema = Joi.object({
  first: Joi.string().min(2).max(256).required(),
  middle: Joi.string().min(2).max(256).allow(""),
  last: Joi.string().min(2).max(256).required(),
  phone: Joi.string()
    .min(9)
    .max(11)
    .pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
    .required()
    .messages({
      "string.pattern.base": "Phone pattern : 0501234567",
      "string.empty": "Phone pattern : 0501234567",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      )
    )
    .messages({
      "string.pattern.base": "the password should be with Capital and small letter, special char and numbers",
      "string.empty":
        "password must be filled with something that you will not forget",
    })
    .min(7)
    .max(20)
    .required(),
  url: Joi.string().min(14).allow(""),
  alt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().min(2).max(256).allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().min(2).max(256).required(),
  zip: Joi.number().min(2).max(256).allow(""),
  isBusiness: Joi.boolean().required(),
});

const validateRegister = (inputToCheck) => validation(registerSchema, inputToCheck);

export { validateRegister };
