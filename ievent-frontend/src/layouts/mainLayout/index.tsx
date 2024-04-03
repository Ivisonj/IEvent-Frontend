import { Box, useMediaQuery, useTheme } from '@mui/material'

import Header from './header'
import Drawer from './drawer'
import BottomNavigationComponent from './bottomNavigation'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
      <Drawer />
      <Box
        component="main"
        sx={{ width: '100%', flexGrow: 1, mt: '60px', p: { xs: 2, sm: 3 } }}
      >
        {children}
      </Box>
      {matchDownMd && <BottomNavigationComponent />}
    </Box>
  )
}

export default MainLayout
