import React, { useContext } from 'react'
import { leftSideMenu, rightSideMenu, RouteTypes } from '../../Constants'
import { StyledMenu, LanguageButton } from './style'
import { LanguageContext } from '../../LanguageContext'
import { Link } from 'react-router-dom'

const MenuComponent = () => {

  const urlPath = window.location.pathname === '/' ? RouteTypes.TOP_NEWS : window.location.pathname

  const { language, setLanguage, disableButtons } = useContext(LanguageContext)

  const handleChangeLanguage = (language) => {
    setLanguage(language)
  }

  return (
    <StyledMenu>
      <ul>
        <div>
          {leftSideMenu.map(item => {
            return <li key={item.name}>
              <Link
                className={urlPath === item.url ? 'active' : ''}
                to={item.url}
              >
                {item.name}
              </Link>
            </li>
          })}
        </div>
        <div>
          {rightSideMenu.map(item => {
            return <li key={item.name} style={{ float: 'right' }}>
              <LanguageButton
                active={language.id === item.id && !disableButtons}
                disabled={disableButtons}
                onClick={() => handleChangeLanguage(item)}
              >
                {item.name}
              </LanguageButton>
            </li>
          })}
        </div>
      </ul>
    </StyledMenu >
  )
}
export default MenuComponent
