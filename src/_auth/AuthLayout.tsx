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
          <section>
            <Outlet />
          </section>
        )
      }
    </>
  )
}

export default AuthLayout