'use client'
import { Box, useMediaQuery, useTheme } from '@mui/material'

import DesktopAuthLayout from './desktopAuthLayout'
import MobileAuthLayout from './mobileAuthLayout'

const AuthPage = () => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Box width="100%" height="100vh" overflow="hidden">
      {!matchDownMd && <DesktopAuthLayout />}
      {matchDownMd && <MobileAuthLayout />}
    </Box>
  )
}

export default AuthPage
