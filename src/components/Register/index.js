import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import registerServ from '../../services/register'
import RedirectReg from '../RedirectReg'

export default function Register () {
  const [isRegistered, setIsRegistered] = useState(false)

  if (isRegistered) return <RedirectReg />
  return (
    <div className='centerForm'>
      <Formik
        initialValues={{ username: '', name: '', password: '' }}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Required username'
          }
          if (!values.name) {
            errors.name = 'Required name'
          }
          if (!values.password) {
            errors.password = 'Required password'
          } else if (values.password.length < 4) {
            errors.password = 'Length must be greater than 4'
          }
          return errors
        }}
        onSubmit={(values, { setFieldError }) => {
          return registerServ(values)
            .then(() => {
              setIsRegistered(true)
            })
            .catch(() => {
              setFieldError('username', 'This username is not valid')
            })
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className='form' autoComplete='off'>
            <label>Username:
              <Field
                className={errors.username ? 'error' : ''}
                placeholder='Enter Username'
                type='username'
                name='username'
                autoComplete='false'
              />
            </label>
            <ErrorMessage
              className='form-error'
              name='username'
              component='small'
            />
            <label>Name:
              <Field
                className={errors.name ? 'error' : ''}
                placeholder='Enter Name'
                type='name' name='name'
                autoComplete='false'
              />
            </label>
            <ErrorMessage
              className='form-error'
              name='name'
              component='small'
            />
            <label>Password:
              <Field
                className={errors.password ? 'error' : ''}
                placeholder='Enter Password'
                type='password' name='password'
                autoComplete='false'
              />
            </label>
            <ErrorMessage
              className='form-error'
              name='password'
              component='small'
            />
            <button className='btn' type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
