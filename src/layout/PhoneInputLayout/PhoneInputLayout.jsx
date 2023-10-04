import React from 'react'
import styles from './PhoneInputLayout.module.css'

const PhoneInputLayout = ({ name, label = null, value = null, id = null }) => {
  if (!id) {
    id = name
  }
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="tel" name={name} value={value} id={id} className="form-control" />
      </div>
    </>
  )
}

export default PhoneInputLayout
