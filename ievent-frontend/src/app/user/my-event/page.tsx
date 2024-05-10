import { Box, Typography } from '@mui/material'

import EventStats from '@/components/eventStats'

const MyEvent = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Meus Eventos
      </Typography>
      <Box width="100%">
        <EventStats />
      </Box>
    </Box>
  )
}

export default MyEvent
