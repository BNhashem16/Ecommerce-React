import React from 'react'
import styles from './PasswordInputLayout.module.css'

const PasswordInputLayout = ({ name, label = null, value = null, id = null }) => {
  if (!id) {
    id = name
  }
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="password" name={name} value={value} id={id} className="form-control" />
      </div>
    </>
  )
}

export default PasswordInputLayout
