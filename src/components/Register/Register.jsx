import React, { useState } from 'react'
import styles from './Register.module.css'
import TextInputLayout from 'layout/TextInputLayout/TextInputLayout'
import EmailInputLayout from 'layout/EmailInputLayout/EmailInputLayout'
import PasswordInputLayout from 'layout/PasswordInputLayout/PasswordInputLayout'
import PhoneInputLayout from 'layout/PhoneInputLayout/PhoneInputLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { register } from 'services/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { BeatLoader, BounceLoader, FadeLoader } from 'react-spinners'

const Register = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let navigation = useNavigate();
  async function handleSubmit(values) {
    setIsLoading(true);
    setIsError(null);
    let result = await register(values).catch((error) => {
      setIsLoading(false);
      
      if (error.response.data.errors) {
        setIsError(error.response.data.errors.msg);
      }
      else if (error.response.data.message) {
        setIsError(error.response.data.message);
      }
    });
    if (result.data.message == 'success') {
      setIsLoading(false);
      navigation('/login');
    }
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
        {isError ? <div className="alert alert-danger">{isError}</div> : null}
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
          {
            isLoading ? 
            <button type="submit" className="btn btn-primary">
              <BeatLoader color="#36d7b7" />
            </button>
            

             : <button type="submit" className="btn btn-primary">Register</button>
          }
        </form>
      </div>
    </>
  )
}

export default Register
