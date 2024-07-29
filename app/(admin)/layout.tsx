import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='dark:bg-gray-900 h-full min-h-screen'>
    {children}
  </div>
}

export default Layout