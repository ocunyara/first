import React, { ReactNode } from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='dark:bg-gray-900 h-full min-h-screen'>
    <Header />
     {children}
    <Footer />
  </div>
}

export default Layout