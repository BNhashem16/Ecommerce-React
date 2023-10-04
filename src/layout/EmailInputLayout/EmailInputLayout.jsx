import React from 'react'
import styles from './EmailInputLayout.module.css'

const EmailInputLayout = ({ name, label = null, value = null, id = null, ...rest}) => {
  if (!id) {
    id = name
  }
  if (label === null) {
    label = name.charAt(0).toUpperCase() + name.slice(1)
  }
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="email" name={name} id={id} value={value} placeholder={"Please Enter " + label}
         className="form-control"
          {...rest}
          />
      </div>
    </>
  )
}

export default EmailInputLayout
