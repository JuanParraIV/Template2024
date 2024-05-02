import React, { useState } from 'react'
import { useFormik } from 'formik'
import { LogInSchema } from '../schemas'
import { useNavigate } from 'react-router-dom'
import useLogIn from '../hooks/useLogIn'
import Toast from '@/modules/core/components/toast'

function LogInForm() {
  const navigate = useNavigate()
  const { logIn } = useLogIn()
  const [toast, setToast] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LogInSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)

      const result = await logIn(values)
      console.log(result)

      if (result === undefined) {
        setToast(true)
        setTimeout(() => setToast(false), 5000)
        return
      }
      navigate('/')
      resetForm()
    },
  })
  return (
    <form
      onSubmit={formik.handleSubmit}
      data-hs-toggle-password-group=""
      className="flex w-1/4 max-lg:w-2/4 max-md:w-3/4 flex-col gap-4 bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5  dark:border-neutral-700 dark:text-neutral-400"
    >
      {toast && <Toast body="No se ha podido iniciar sessión" type="info" />}
      <div className="max-w-full flex flex-col gap-2">
        <div className="max-w-full w flex flex-col gap-2">
          <label
            htmlFor="input-label"
            className="block text-sm font-medium mb-2 dark:text-white"
          >
            Email
          </label>

          <input
            type="text"
            id="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            placeholder="correo@gmail.com"
            className="input grow input-bordered bg-white"
          />
        </div>
        <span className="text-center text-xs text-red-500">
          {formik.errors.email}
        </span>
      </div>
      <div className="max-w-full flex flex-col gap-2">
        <label className="block text-sm mb-2 dark:text-white">Contraseña</label>
        <div className="relative">
          <label className="input input-bordered flex items-center gap-2 bg-white">
            <input
              type="password"
              className="grow"
              placeholder="Ingresar contraseña"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
            />
          </label>
        </div>
        <span className="text-center text-xs text-red-500 max-h-10">
          {formik.errors.password}
        </span>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-default-checkbox"
        />
        <label
          htmlFor="hs-default-checkbox"
          className="text-sm text-gray-500 ms-3 dark:text-neutral-400 flex items-center"
        >
          Recuerdame
        </label>
      </div>
      <button
        type="submit"
        disabled={!(formik.dirty && formik.isValid)}
        className="py-3 px-4 flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#DEAB50] text-white hover:bg-[#9b8638] disabled:opacity-50 disabled:pointer-events-none"
      >
        Iniciar sesión
      </button>
      <div className="flex justify-center gap-2 text-sm">
        ¿No tienes cuenta?{' '}
        <a href="/signup" className="font-bold italic">
          Crear cuenta
        </a>
      </div>
    </form>
  )
}

export default LogInForm
