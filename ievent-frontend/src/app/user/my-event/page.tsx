import { Box, Typography } from '@mui/material'

import EventStats from '@/components/eventStats'
import ParticipantsTable from './participantsTable'
import IButton from '@/components/Ibutton'

const MyEvent = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Meu Evento
      </Typography>
      <Box width="100%">
        <EventStats nextEvent="20 Mai" totalGuests={50} totalEvents={10} />
        <Box mt={2}>
          <Typography variant="h5" mb={1}>
            Participantes
          </Typography>
          <ParticipantsTable />
          <Box
            width="100%"
            mt={5}
            display="flex"
            justifyContent="space-between"
          >
            <IButton type="button" width="auto">
              Cancelar Próximo Evento
            </IButton>
            <IButton
              type="button"
              width="auto"
              bgColor="error.main"
              hover="error.dark"
            >
              Excluir Evento
            </IButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MyEvent
