"use client";
//in this case we are using the browser's capabilities so we have to use the use Client directive

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session })=>{
  return(
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider