import React from 'react'
import styles from './TextInputLayout.module.css'

const TextInputLayout = ({ name, label = null, value = null, id = null }) => {
  // if id is null, use name
  if (id === null) {
    id = name
  }
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" name={name} value={value} id={id} className="form-control" />
      </div>
    </>
  )
}

export default TextInputLayout
