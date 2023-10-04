import React from 'react'
import styles from './Register.module.css'
import TextInputLayout from 'layout/TextInputLayout/TextInputLayout'
import EmailInputLayout from 'layout/EmailInputLayout/EmailInputLayout'
import PasswordInputLayout from 'layout/PasswordInputLayout/PasswordInputLayout'
import PhoneInputLayout from 'layout/PhoneInputLayout/PhoneInputLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  function handleSubmit(values) {
    console.log(values)
  }
  let form = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: handleSubmit,
  })

  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Register Now</h2>
        <form onSubmit={form.handleSubmit}>
          <div className="form-group my-2">
            <TextInputLayout name="name" value={form.values.name} onChange={form.handleChange}></TextInputLayout>
          </div>
          {form.touched.name && form.errors.name ? <div>{form.errors.name}</div> : null}

          <div className="form-group my-2">
            <EmailInputLayout name="email" value={form.values.email} onChange={form.handleChange}></EmailInputLayout>
          </div>
          <div className="form-group my-2">
            <PhoneInputLayout name="phone" label="Phone" value={form.values.phone} onChange={form.handleChange}></PhoneInputLayout>
          </div>
          <div className="form-group my-2">
            <PasswordInputLayout name="password" value={form.values.password} onChange={form.handleChange}></PasswordInputLayout>
          </div>
          <div className="form-group my-2">
            <PasswordInputLayout name="rePassword" label="Re-password" onChange={form.handleChange}></PasswordInputLayout>
          </div>

          <button className="btn bg-main" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
