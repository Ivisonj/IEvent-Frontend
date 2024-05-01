import { Box, Typography } from '@mui/material'

import WeeklyCalendar from '@/components/weeklyCalendar'
import EventCard from '@/components/eventCard'

const eventData = [
  {
    id: '01',
    title: 'Ensaio Coral Jovem de Petrolina',
    date: '30 Abr, 2024',
    time: '19:30',
    address: 'Av. Central, n° 323, Vermelhos, Lagoa Grande',
    hasStarted: false,
  },
]

const Events = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box mb={2}>
          <Typography variant="h5">Eventos</Typography>
        </Box>
        <WeeklyCalendar />
        <Box flexDirection="column" mt={2}>
          {eventData.map((item) => (
            <EventCard
              key={item.id}
              title={item.title}
              date={item.date}
              time={item.time}
              address={item.address}
              hasStarted={item.hasStarted}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Events
