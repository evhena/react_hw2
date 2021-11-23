import React from 'react'

const AuthHoc = (props) => {
  const {
    children,
    isAuth
  } = props;

  if (!isAuth) {
    return null;
  }

  return children
}

export default AuthHoc