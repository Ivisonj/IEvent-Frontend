import { Box } from '@mui/material'

import DrawerStyled from './drawerStyled'
import DrawerHeader from './drawerHeader'
import DrawerContent from './drawerContent'

const Drawer = () => {
  return (
    <Box component="nav">
      <DrawerStyled>
        <DrawerHeader />
        <DrawerContent />
      </DrawerStyled>
    </Box>
  )
}

export default Drawer
