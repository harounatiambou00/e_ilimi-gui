import React from 'react'
import { Outlet } from 'react-router-dom'
import {FormControl} from '../../../components/core'

const FormControls = [
  {
    id : 1,
    type : 'text',
    label : 'Nom',
    placeholder : 'Nom',
    isRequired : 'false',
    isAutofocus : 'true'
  },
  {
    id : 2,
    type : 'email',
    label : 'email',
    placeholder : 'email',
    isRequired : 'true',
    isAutofocus : 'flase'
  },
  {
    id : 3,
    type : 'password',
    label : 'password',
    placeholder : 'mot de passe',
    isRequired : 'true',
    isAutofocus : 'false'
  },
  {
    id : 4,
    type : 'date',
    label : 'Date de naissance',
    placeholder : 'Date de Naissance',
    isRequired : 'false',
    isAutofocus : 'false'
  },
]

const Home = () => {
  return (
    <div>
      <h3>User Home page</h3>
      <div>
        {FormControls.map((formControl) => {
          return (
            <FormControl key = {formControl.id} type = {formControl.type} label={formControl.label} placeholder={formControl.placeholder} isAutofocus={formControl.isAutofocus} isRequired={formControl.isRequired} />
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default Home