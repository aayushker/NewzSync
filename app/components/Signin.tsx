import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { Button } from '@nextui-org/react'

export default function Signin({ providers }: { providers: any }) {
  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
