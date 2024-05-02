import { useState } from 'react'
import { Box, Typography, useTheme, Button } from '@mui/material'

import LoginForm from './loginForm'
import SignInForm from './signInForm'

const MobileAuthLayout = () => {
  const theme = useTheme()
  const [isLogin, setIsLogin] = useState(true)

  const handleClick = () => {
    setIsLogin(!isLogin)
  }
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      position="relative"
    >
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
          transition: theme.transitions.create('left', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '40%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h1" mb={3}>
            Login
          </Typography>
          <LoginForm />
          <Button onClick={handleClick} sx={{ mt: 3 }}>
            Criar Conta
          </Button>
        </Box>
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
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '40%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h1" mb={3}>
            Criar Conta
          </Typography>
          <SignInForm />
          <Button onClick={handleClick} sx={{ mt: 3 }}>
            Fazer Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileAuthLayout
