import React from 'react'
import styles from './EmailInputLayout.module.css'

const EmailInputLayout = ({ name, label = null, value = null, id = null }) => {
  if (!id) {
    id = name
  }
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="email" name={name} id={id} value={value} className="form-control" />
      </div>
    </>
  )
}

export default EmailInputLayout
