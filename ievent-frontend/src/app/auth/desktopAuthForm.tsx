'use client'
import { useState } from 'react'

import { Box, Typography, useTheme } from '@mui/material'

import LoginForm from './loginForm'
import SignInForm from './signInForm'
import TransparentButton from '@/components/transparentButton'

const DesktopAuthForm = () => {
  const theme = useTheme()

  const [isLogin, setIsLogin] = useState(true)

  const handleClick = () => {
    setIsLogin(!isLogin)
  }

  const boxContent = isLogin
    ? {
      title: 'Vamos Fazer Login?',
      message:
        'Olá, amigo(a)! Estamos felizes em saber que você está aqui. Faça o seu Login e aproveite a nossa plataforma de Eventos.',
      buttonChildren: 'Criar Conta',
    }
    : {
      title: 'Seja Bem-Vindo(a)!',
      message:
        'Olá, amigo(a)! Com alegria te apresento a nossa plataforma! Crie já a sua conta, gerencie seus evetos e aproveite. vamo ou bora?',
      buttonChildren: 'Fazer Login',
    }

  return (
    <Box width="100%" height="100%" display="flex">
      <Box
        position="relative"
        left={isLogin ? `0%` : `50%`}
        width="50%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: 'inherit',
          transition: theme.transitions.create('left', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Typography variant="h1" mb={3}>
          {isLogin ? 'Login' : 'Criar Conta'}
        </Typography>
        <Box
          width="50%"
          height="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {isLogin && <LoginForm />}
          {!isLogin && <SignInForm />}
        </Box>
      </Box>
      <Box
        position="absolute"
        right={isLogin ? `0%` : `50%`}
        width="50%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          transition: theme.transitions.create('right', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Typography variant="h1" mb={2}>
          {boxContent.title}
        </Typography>
        <Box width="70%" mb={4}>
          <Typography>{boxContent.message}</Typography>
        </Box>
        <TransparentButton onClick={handleClick}>
          {boxContent.buttonChildren}
        </TransparentButton>
      </Box>
    </Box>
  )
}

export default DesktopAuthForm
