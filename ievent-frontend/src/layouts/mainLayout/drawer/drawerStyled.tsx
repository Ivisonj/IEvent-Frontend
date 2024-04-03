import { styled, useTheme } from '@mui/material/styles'
import { Box, useMediaQuery } from '@mui/material'

import { drawerWidth } from '@/config'

const DrawerStyled = styled(Box)(() => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return {
    display: matchDownMd ? 'none' : 'block',
    width: drawerWidth,
    height: '100vh',
    borderRight: `2px solid ${theme.palette.divider}`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
})

export default DrawerStyled
