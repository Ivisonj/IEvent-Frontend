import { Box, useMediaQuery, useTheme } from '@mui/material'

import { drawerWidth } from '@/config'
import Header from './header'
import Drawer from './drawer'
import BottomNavigationComponent from './bottomNavigation'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        p: matchDownMd ? 0 : 3,
        backgroundColor: theme.palette.primary.darker,
      }}
    >
      <Drawer />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: matchDownMd ? '100%' : `calc(100% - ${drawerWidth}px)`,
          backgroundColor: theme.palette.common.white,
          overflow: 'hidden',
          borderRadius: '40px',
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            width: '100%',
            height: '92%',
            flexGrow: 1,
            mt: { xs: '60px', lg: 0 },
            p: { xs: 2, sm: 3 },
          }}
        >
          {children}
        </Box>
      </Box>
      {matchDownMd && <BottomNavigationComponent />}
    </Box>
  )
}

export default MainLayout
