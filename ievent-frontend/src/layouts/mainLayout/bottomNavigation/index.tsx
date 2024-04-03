import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import HomeIcon from '@mui/icons-material/Home'
import EventNoteIcon from '@mui/icons-material/EventNote'
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
        borderRadius: 5,
        backgroundColor: '#1c242c',
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
        label="Perfil"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNavigationComponent
