import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@nextui-org/react'

const Signin = () => {
  return (
    <>
      <Button onClick={() => signIn('google')}>Sign in with Google</Button>
    </>
  )
}

export default Signin
