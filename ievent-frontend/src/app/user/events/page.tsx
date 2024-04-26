import { Box, Typography } from '@mui/material'

import Calendar from '@/components/calendar'

const Events = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box mb={2}>
          <Typography variant="h5">Eventos</Typography>
        </Box>
        <Calendar />
      </Box>
    </>
  )
}

export default Events
