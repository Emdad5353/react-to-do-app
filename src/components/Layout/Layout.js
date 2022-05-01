import React from 'react';
import NavBar from "../common/NavBar";

const Layout =({children}) =>{
  return(
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout;