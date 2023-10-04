import React from 'react'
import styles from './Register.module.css'
import TextInputLayout from 'layout/TextInputLayout/TextInputLayout'
import EmailInputLayout from 'layout/EmailInputLayout/EmailInputLayout'
import PasswordInputLayout from 'layout/PasswordInputLayout/PasswordInputLayout'
import PhoneInputLayout from 'layout/PhoneInputLayout/PhoneInputLayout'

const Register = () => {
  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Register Now</h2>
        <form action="">
          <div className="form-group my-2">
            <TextInputLayout name="name" label="Name" value=""></TextInputLayout>
          </div>
          <div className="form-group my-2">
            <EmailInputLayout name="email" label="Email" value=""></EmailInputLayout>
          </div>
          <div className="form-group my-2">
            <PhoneInputLayout name="phone" label="Phone" value=""></PhoneInputLayout>
          </div>
          <div className="form-group my-2">
            <PasswordInputLayout name="password" label="Password" value=""></PasswordInputLayout>
          </div>

          <button className='btn bg-main'>Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
