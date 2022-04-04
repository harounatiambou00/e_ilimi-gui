import React from 'react'

const FormControl = (props) => {
  return (
    <div className='form-control'>
        <label>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} {...props.isRequired === 'true' ? 'required' : ''} {...props.isAutofocus === 'true' ? 'autofocus' : ''}/>
        <span></span>
    </div>
  )
}

export default FormControl