import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import { leftSideMenu, rightSideMenu } from '../../Constants'
import { StyledMenu } from './index.style'

const MainMenu = (props) => {

  const [activeItem, setActiveItem] = useState()

  const handleItemClick = (e, { name }) => setActiveItem(name)

  const handleChangeLanguage = (language) => {
    props.onLanguageChange(language)
  }

  return <>
    <StyledMenu fluid inverted={true} pointing>
      {leftSideMenu.map(item => {
        return <Menu.Item
          as={Link}
          to={item.url}
          key={item.name}
          name={item.name}
          active={activeItem === item.name || window.location.pathname === item.url}
          onClick={handleItemClick}
        />
      })
      }
      <Menu.Menu position='right'>
        {rightSideMenu.map(item => {
          return <Menu.Item key={item.id}>
            <Button id={item.id} active={props.language === item.id} onClick={() => handleChangeLanguage(item)} icon>{item.name}</Button>
          </Menu.Item>
        })}
      </Menu.Menu>
    </StyledMenu>
  </>
}
export default MainMenu
