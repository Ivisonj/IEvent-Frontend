import { Box, Typography } from '@mui/material'

import WeeklyCalendar from '@/components/weeklyCalendar'

const Events = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box mb={2}>
          <Typography variant="h5">Eventos</Typography>
        </Box>
        <WeeklyCalendar />
      </Box>
    </>
  )
}

export default Events
