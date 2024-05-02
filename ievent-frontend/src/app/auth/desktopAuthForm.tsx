'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { z } from 'zod'
import {
  Box,
  TextField,
  Typography,
  useTheme,
  FormHelperText,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

import IButton from '@/components/Ibutton'
import TransparentButton from '@/components/transparentButton'

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('Campo obrigatório')
    .email('Formato de E-mail inválido'),
  password: z
    .string()
    .nonempty('Campo obrigatório')
    .min(4, 'No mínimo 4 caracteres'),
})

type loginFormData = z.infer<typeof loginFormSchema>

const DesktopAuthForm = () => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const [isLogin, setIsLogin] = useState(true)

  const handleClick = () => {
    setIsLogin(!isLogin)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  })

  const sendFormData = (data: any) => {
    console.log(data)
  }

  const boxContent = isLogin
    ? {
      title: 'Vamos Fazer Login?',
      message:
        'Olá, amigo(a)! Estamos felizes em saber que você voltou. Faça o seu Login e aproveite a nossa plataforma de Eventos.',
      buttonChildren: 'Fazer Login',
    }
    : {
      title: 'Seja Bem-Vindo(a)!',
      message:
        'Olá, amigo(a)! Com alegria te apresento a nossa plataforma! Crie já a sua conta, gerencie seus evetos e aproveite. vamo ou bora?',
      buttonChildren: 'Criar Conta',
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
          Login
        </Typography>
        <Box
          width="50%"
          height="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            onSubmit={handleSubmit(sendFormData)}
            component="form"
            autoComplete="off"
            width="100%"
          >
            <Box mb={3}>
              <TextField
                {...register('email')}
                fullWidth
                id="email-input"
                label="E-mail"
                variant="outlined"
                error={Boolean(errors.email)}
              />
              {errors.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </Box>
            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Senha
                </InputLabel>
                <OutlinedInput
                  {...register('password')}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  error={Boolean(errors.password)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {errors.password && (
                <FormHelperText error>{errors.password.message}</FormHelperText>
              )}
            </Box>
            <IButton type="submit">Login</IButton>
          </Box>
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
