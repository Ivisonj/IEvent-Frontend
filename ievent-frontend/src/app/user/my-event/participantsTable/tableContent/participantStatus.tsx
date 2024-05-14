import { Stack, Typography, useTheme } from '@mui/material'

interface ParticipantStatusProps {
  absences: number
  frequency: string
}

const ParticipantStatus = ({ frequency, absences }: ParticipantStatusProps) => {
  const theme = useTheme()
  let color

  if (frequency === 'good') {
    color = theme.palette.success.main
  } else if (frequency === 'attention') {
    color = theme.palette.warning.main
  } else if (frequency === 'bad') {
    color = theme.palette.error.main
  }

  return (
    <Stack
      sx={{
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        borderRadius: '10px',
        backgroundColor: color,
      }}
    >
      <Typography variant="h6">{absences}</Typography>
    </Stack>
  )
}

export default ParticipantStatus
