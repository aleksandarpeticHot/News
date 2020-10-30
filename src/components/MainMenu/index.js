import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Segment } from 'semantic-ui-react'
import { leftSideMenu, rightSideMenu } from '../../Constants'
import { StyledMenu } from './index.style'
import Articles from '../../pages/Articles/index'

const MainMenu = () => {

  const [activeItem, setActiveItem] = useState(leftSideMenu[0].name)

  const handleItemClick = (e, { name }) => setActiveItem(name)


  return <Fragment>
    <StyledMenu fluid inverted={true} pointing>
      {leftSideMenu.map(item => {
        return <Menu.Item
          as={Link}
          to={item.url}
          key={item.name}
          name={item.name}
          active={activeItem === item.name}
          onClick={handleItemClick}
        />
      })
      }
      <Menu.Menu position='right'>
        {rightSideMenu.map(item => {
          return <Menu.Item key={item}>
            <Button icon>{item}</Button>
          </Menu.Item>
        })}
      </Menu.Menu>
    </StyledMenu>
    {activeItem === leftSideMenu[0].name && <Articles></Articles>}
  </Fragment>
}
export default MainMenu
