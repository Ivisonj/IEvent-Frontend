import { Box, Typography } from '@mui/material'

import EventStats from '@/components/eventStats'
import ParticipantsTable from './participantsTable'

const MyEvent = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Meus Eventos
      </Typography>
      <Box width="100%">
        <EventStats totalGuests={50} totalEvents={10} />
        <Box mt={2}>
          <Typography variant="h5" mb={1}>
            Participantes
          </Typography>
          <ParticipantsTable />
        </Box>
      </Box>
    </Box>
  )
}

export default MyEvent
