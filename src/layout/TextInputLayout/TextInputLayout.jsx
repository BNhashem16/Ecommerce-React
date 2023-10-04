import React from 'react'
import styles from './TextInputLayout.module.css'
import { useFormik } from 'formik'

const TextInputLayout = ({ name, label = null, value = null, id = null , ...rest}) => {
  if (id === null) {
    id = name
  }
  if (label === null) {
    label = name.charAt(0).toUpperCase() + name.slice(1)
  }
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" name={name} value={value} id={id} placeholder={"Please Enter " + label}
        className="form-control" 
        {...rest}
        />
      </div>
    </>
  )
}

export default TextInputLayout
