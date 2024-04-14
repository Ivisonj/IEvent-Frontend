import { Stack, Typography, Avatar, useTheme } from '@mui/material'

const DrawerHeader = () => {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        width: '100%',
        height: 175,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Avatar
        sx={{
          bgcolor: theme.palette.primary.main,
          width: 100,
          height: 100,
          borderRadius: '30px',
          my: 2,
        }}
      >
        I
      </Avatar>
      <Typography variant="h3">Ivison Joel</Typography>
    </Stack>
  )
}

export default DrawerHeader
