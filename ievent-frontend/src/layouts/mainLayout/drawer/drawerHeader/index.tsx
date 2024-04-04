import { Stack, Typography, Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

const DrawerHeader = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
          width: '50%',
          height: '50%',
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
