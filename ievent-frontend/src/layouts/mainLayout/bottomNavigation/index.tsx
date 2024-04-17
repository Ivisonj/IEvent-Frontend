import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import HomeIcon from '@mui/icons-material/Home'
import EventNoteIcon from '@mui/icons-material/EventNote'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import PersonIcon from '@mui/icons-material/Person'

const BottomNavigationComponent = () => {
  const [value, setValue] = React.useState('home')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
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
    </BottomNavigation>
  )
}

export default BottomNavigationComponent
