import React from 'react'
import styles from './PasswordInputLayout.module.css'

const PasswordInputLayout = ({ name, label = null, value = null, id = null, ...rest }) => {
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
        <input type="password" name={name} value={value} id={id} placeholder={"Please Enter " + label} {...rest} className="form-control" />
      </div>
    </>
  )
}

export default PasswordInputLayout
