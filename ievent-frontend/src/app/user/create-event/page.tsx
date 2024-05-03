import { Box, Typography } from '@mui/material'

import CreateEventForm from './createEventForm'

const CreateEvent = () => {
  return (
    <Box width="100%">
      <Typography variant="h5" mb={2}>
        Criar Evento
      </Typography>
      <CreateEventForm />
    </Box>
  )
}

export default CreateEvent
