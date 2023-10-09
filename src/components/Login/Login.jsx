import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import TextInputLayout from 'layout/TextInputLayout/TextInputLayout'
import EmailInputLayout from 'layout/EmailInputLayout/EmailInputLayout'
import PasswordInputLayout from 'layout/PasswordInputLayout/PasswordInputLayout'
import PhoneInputLayout from 'layout/PhoneInputLayout/PhoneInputLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { login, register } from 'services/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { tokenContext } from 'context/TokenContext'


const Login = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let navigation = useNavigate();
  let { setToken } = useContext(tokenContext);
  async function handleSubmit(values) {
    setIsLoading(true);
    setIsError(null);
    let result = await login(values).catch((error) => {

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
      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      navigation('/');
    }
  }
  let form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: handleSubmit,
  })

  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Login Now</h2>
        {isError ? <div className="alert alert-danger">{isError}</div> : null}
        <form onSubmit={form.handleSubmit}>
          <div className="form-group my-2">
            <EmailInputLayout name="email" value={form.values.email} onChange={form.handleChange}></EmailInputLayout>
          </div>
          <div className="form-group my-2">
            <PasswordInputLayout name="password" value={form.values.password} onChange={form.handleChange}></PasswordInputLayout>
          </div>
          {
            isLoading ? 
            <button type="submit" className="btn btn-primary">
              <BeatLoader color="#36d7b7" />
            </button>
            

             : <button type="submit" className="btn btn-primary">Login</button>
          }
        </form>
      </div>
    </>
  )
}

export default Login
