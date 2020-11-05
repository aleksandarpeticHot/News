import React from 'react'
import MainMenu from '../components/MainMenu/MenuComponent'

type LayoutProps = {
  children: any,
  removeMainMenuAndHeader?: boolean
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      {!props.removeMainMenuAndHeader && <MainMenu />}
      {props.children}
    </>
  )
}
export default Layout
