import React from 'react'
import styles from './PhoneInputLayout.module.css'

const PhoneInputLayout = ({ name, label = null, value = null, id = null, ...rest }) => {
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
        <input type="tel" name={name} value={value} id={id} className="form-control" placeholder={"Please Enter " + label} {...rest} />
      </div>
    </>
  )
}

export default PhoneInputLayout
