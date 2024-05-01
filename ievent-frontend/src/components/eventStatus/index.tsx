import { Box, useTheme, Typography } from '@mui/material'

interface StatusDotProps {
  hasStarted: boolean
}

const EventStatus = ({ hasStarted }: StatusDotProps) => {
  const theme = useTheme()
  const status = hasStarted
    ? { color: theme.palette.success.main, text: 'Iniciou' }
    : { color: theme.palette.warning.light, text: 'Aguardando' }
  return (
    <Box display="flex" alignItems="center">
      <Box
        sx={{
          width: 15,
          height: 15,
          mr: 0.5,
          borderRadius: '50%',
          bgcolor: status.color,
        }}
      />
      <Typography variant="h5">{status.text}</Typography>
    </Box>
  )
}

export default EventStatus
