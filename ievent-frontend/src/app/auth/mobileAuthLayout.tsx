import { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

import LoginForm from './loginForm'
import SignInForm from './signInForm'

const MobileAuthLayout = () => {
  const theme = useTheme()
  const [isLogin, setIsLogin] = useState(true)

  const handleClick = () => {
    setIsLogin(!isLogin)
  }
  return (
    <Box width="100%" height="100%" overflow="hidden" position="relative">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: isLogin ? 0 : -1000,
          px: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          transition: theme.transitions.create('left', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Typography variant="h1" mb={3}>
          Login
        </Typography>
        <LoginForm />
        <button onClick={handleClick}>Criar conta</button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: !isLogin ? 0 : 1000,
          px: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.common.white,
          color: theme.palette.common.black,
          transition: theme.transitions.create('left', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Typography variant="h1" mb={3}>
          Criar Conta
        </Typography>
        <SignInForm />
        <button onClick={handleClick}>Login</button>
      </Box>
    </Box>
  )
}

export default MobileAuthLayout
