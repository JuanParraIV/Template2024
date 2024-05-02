import * as yup from 'yup'

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@\$%\^&\*])(?=.{8,})/
const usernameSignUp = /^(\S+$)/g
const emailRules = /^[^@]+@[^@]+\.[^@]+$/

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'User Name must be at least 5 characters long')
    .max(25, 'User name  must contain a maximum of 25 characters')
    .required('Required, Please Enter your User Name')
    .matches(usernameSignUp, 'spaces not allowed'),
  password: yup
    .string()
    .required('Required, Please Enter your password')
    .matches(
      passwordRules,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
})

export const signUpSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(5, 'Full Name must be at least 5 characters long')
    .max(65, 'Full name  must contain a maximum of 65 characters')
    .required('Required, Please Enter your Full Name'),
  username: yup
    .string()
    .min(5, 'User Name must be at least 5 characters long')
    .max(25, 'User name  must contain a maximum of 25 characters')
    .required('Required, Please Enter your User Name ')
    .matches(usernameSignUp, 'spaces not allowed'),
  email: yup
    .string()
    .max(255)
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      passwordRules,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character: ! @ # . * % & @'
    ),
  repeatPassword: yup
    .string()
    .required('Repeat Password is required')
    .when('password', {
      is: (val: string, schema: yup.StringSchema<string>) =>
        val && val.length > 0
          ? schema.oneOf(
              [yup.ref('password')],
              'Both passwords need to be the same'
            )
          : schema,
    }),
})

export const LogInSchema = yup.object().shape({
  email: yup
    .string()
    .min(5, 'El nombre de usuario debe contener al menos 5 caracteres')
    .max(25, 'El nombre de usuario debe tener un maximo de 25 caracteres')
    .required('Requerido, por favor introduzca su nombre de usuario')
    .matches(emailRules, 'Debe ser un mail'),
  password: yup
    .string()
    .required('Requerido, por favor ingrese la contraseña')
    .matches(
      passwordRules,
      'Debe contener 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial: : ! @ # . * % & @'
    ),
})
