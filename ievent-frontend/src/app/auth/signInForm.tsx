'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { z } from 'zod'
import {
  Box,
  TextField,
  FormHelperText,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

import IButton from '@/components/Ibutton'

const signInFormSchema = z.object({
  name: z.string().nonempty('Campo obrigatório'),
  email: z
    .string()
    .nonempty('Campo obrigatório')
    .email('Formato de E-mail inválido'),
  password: z
    .string()
    .nonempty('Campo obrigatório')
    .min(4, 'No mínimo 4 caracteres'),
})

type signInFormData = z.infer<typeof signInFormSchema>

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInFormData>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onChange',
  })

  const sendFormData = (data: signInFormData) => {
    console.log(data)
  }

  return (
    <Box
      onSubmit={handleSubmit(sendFormData)}
      component="form"
      autoComplete="off"
      width="100%"
    >
      <Box mb={3}>
        <TextField
          {...register('name')}
          fullWidth
          id="name-input"
          label="Nome Completo"
          variant="outlined"
          error={Boolean(errors.name)}
        />
        {errors.name && (
          <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
      </Box>
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
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
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
      <IButton type="submit">Criar</IButton>
    </Box>
  )
}

export default SignInForm
