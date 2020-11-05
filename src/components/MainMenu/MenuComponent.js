import React, { useContext } from 'react'
import { leftSideMenu, rightSideMenu } from '../../Constants'
import { StyledMenu, LanguageButton } from './style'
import type { LanguageType } from '../../types/languageType'
import { LanguageContext } from '../../LanguageContext'


type MenuComponentProps = {
  language: LanguageType,
  disableButtons: boolean,
  setLanguage: (language: Object) => void
}

const MenuComponent = (props: MenuComponentProps) => {

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
