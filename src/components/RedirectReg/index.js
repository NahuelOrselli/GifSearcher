import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import './Redirect.css'

function RedirectReg () {
  const [time, setTime] = useState(5)
  const [, navigate] = useLocation()

  useEffect(() => {
    if (time === 0) {
      navigate('/')
    } else {
      setTimeout(() => {
        setTime(prevTime => prevTime - 1)
      }, [1000])
    }
  }, [time, navigate])
  return (
    <>
      <div className='Redirect-wrapper'>
        <h4 className='App-title'>Great!</h4>
        <h5 className='App-title'>You've been successfully registered!</h5>
        <h6 className='App-title'>You'll be redirect in {time} {time > 1 ? 'seconds' : 'second'} to Home, please Login</h6>
      </div>
    </>
  )
}

export default React.memo(RedirectReg)
