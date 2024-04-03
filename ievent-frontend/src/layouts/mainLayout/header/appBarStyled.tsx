import { useTheme, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'

import { drawerWidth } from '@/config'

const AppBarStyled = styled(AppBar)(() => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return {
    width: matchDownMd ? '100%' : `calc(100% - ${drawerWidth}px)`,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    background: 'transparent',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
})

export default AppBarStyled
