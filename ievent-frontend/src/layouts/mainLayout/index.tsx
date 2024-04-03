import { Grid, useMediaQuery, useTheme } from '@mui/material'

import Header from './header'
import Drawer from './drawer'
import BottomNavigationComponent from './bottomNavigation'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Grid item xs={12} height="100vh">
      <Drawer />
      <Header />
      <Grid item xs={12} height={1200}>
        {children}
      </Grid>
      {matchDownMd && <BottomNavigationComponent />}
    </Grid>
  )
}

export default MainLayout
