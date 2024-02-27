import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

type Props = {}

const AuthLayout = (props: Props) => {
  const isAuthicated = false;
  return (
    <>
      {
        isAuthicated ? (
          <Navigate to="/" />
        ) : (
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />

            <img src='/assets/images/side-img.svg'
              alt='logo'
              className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' />
          </section>
        )
      }
    </>
  )
}

export default AuthLayout