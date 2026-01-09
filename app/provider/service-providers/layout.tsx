import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container m-auto px-4 my-2'>
      {children}
    </div>
  )
}

export default Layout
