'use client'
import { useRouter } from 'next/navigation'
import { Box, Button, Typography, Stack } from '@mui/material'

import HomeEventCard from '@/components/homeEventCard'

const eventData = [
  {
    id: '01',
    title: 'Ensaio Coral Jovem de Petrolina',
    date: '30 Abr, 2024',
    time: '19:30',
    address: 'Av. Central, n° 323, Vermelhos, Lagoa Grande',
  },
]

const Home = () => {
  const router = useRouter()
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Box width="100" flexDirection="column" mb={3}>
        <Typography variant="h5" mb={1}>
          Participando
        </Typography>
        <Stack width="100%" direction="column">
          {eventData.map((item) => (
            <HomeEventCard
              key={item.id}
              title={item.title}
              date={item.date}
              time={item.time}
              address={item.address}
            />
          ))}
        </Stack>
      </Box>
      <Box
        width="100"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">Meus Eventos</Typography>
        <Button
          variant="text"
          onClick={() => router.push('/user/create-event')}
        >
          Criar Evento
        </Button>
      </Box>
    </Box>
  )
}

export default Home
