import React from 'react'
import MainMenu from '../components/MainMenu/MenuComponent'

type LayoutProps = {
  children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainMenu />
      {props.children}
    </>
  )
}
export default Layout
