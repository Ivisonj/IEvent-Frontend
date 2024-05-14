import { Box, Typography } from '@mui/material'

import ParticipantStats from '@/components/participantStats'

const EventPage = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Evento
      </Typography>
      <Box width="100%">
        <ParticipantStats attendance={10} delays={3} absences={6} />
      </Box>
    </Box>
  )
}

export default EventPage
