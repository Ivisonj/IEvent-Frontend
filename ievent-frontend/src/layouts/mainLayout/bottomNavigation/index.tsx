import Link from 'next/link'
import { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

import menuItems from '../menuItems'
import { activeItem } from '@/store/reducers/menu'

const BottomNavigationComponent = () => {
  const dispatch = useDispatch()

  const openItem = useSelector((state: any) => state.menu.openItem)
  console.log(openItem)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(activeItem({ openItem: [newValue] }))
  }

  const itemHandler = (id: any & void) => {
    dispatch(activeItem({ openItem: [id] }))
  }

  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 0,
        width: 4 / 4,
        height: 60,
      }}
      value={openItem[0]}
      onChange={handleChange}
    >
      {menuItems.items[0].children.map((item: any) => (
        <BottomNavigationAction
          key={item.id}
          onClick={() => itemHandler(item.id)}
          label={item.title}
          value={item.id}
          icon={<item.icon />}
        />
      ))}
    </BottomNavigation>
  )
}

export default BottomNavigationComponent

{
  /* <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 0,
        width: 4 / 4,
        height: 60,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Eventos"
        value="events"
        icon={<EventNoteIcon />}
      />
      <BottomNavigationAction
        label="Criar"
        value="create"
        icon={<BorderColorOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Perfil"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation> */
}
