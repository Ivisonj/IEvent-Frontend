import { Box, Typography } from '@mui/material'

import ParticipantStats from '@/components/participantStats'
import FrequencyTable from './frequencyTable'
import IButton from '@/components/Ibutton'

const EventPage = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Evento
      </Typography>
      <Box width="100%">
        <ParticipantStats attendance={10} delays={3} absences={6} />
        <Box mt={2}>
          <Typography variant="h5" mb={1}>
            Frequência
          </Typography>
          <FrequencyTable />
          <Box width="100%" mt={5} display="flex" justifyContent="flex-start">
            <IButton
              type="button"
              width="auto"
              bgColor="error.main"
              hover="error.dark"
            >
              Sair do Evento
            </IButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default EventPage
