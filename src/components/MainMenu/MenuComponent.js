import React from 'react'
import { leftSideMenu, rightSideMenu } from '../../Constants'
import { StyledMenu, LanguageButton } from './style'

const MenuComponent = (props) => {

  const handleChangeLanguage = (language) => {
    props.onLanguageChange(language)
  }

  return <StyledMenu>
    <ul>
      <div>
        {leftSideMenu.map(item => {
          return <li key={item.name}>
            <a
              className={window.location.pathname === item.url ? 'active' : ''}
              href={item.url}
            >
              {item.name}
            </a>
          </li>
        })}
      </div>
      <div>
        {rightSideMenu.map(item => {
          return <li key={item.name} style={{ float: 'right' }}>
            <LanguageButton
              active={props.language.id === item.id && !props.disableButtons}
              disabled={props.disableButtons}
              onClick={() => handleChangeLanguage(item)}
            >
              {item.name}
            </LanguageButton>
          </li>
        })}
      </div>
    </ul>
  </StyledMenu >
}
export default MenuComponent
