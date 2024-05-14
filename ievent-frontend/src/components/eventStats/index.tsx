'use client'
import {
  UserOutlined,
  CalendarOutlined,
  CarryOutOutlined,
} from '@ant-design/icons'
import { Box, Typography, Stack, useTheme } from '@mui/material'

import MainCard from '../mainCard'

interface EventStatsProps {
  totalGuests: number
  totalEvents: number
  nextEvent: string
}

const EventStats = ({
  totalGuests,
  totalEvents,
  nextEvent,
}: EventStatsProps) => {
  const theme = useTheme()
  return (
    <Box
      width="100%"
      sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
    >
      <MainCard
        sx={{ mb: { xs: 1, sm: 0 } }}
        bgColor={theme.palette.success.dark}
      >
        <Typography variant="h6">Total de Convidados</Typography>
        <Stack
          width="100%"
          height="45px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <UserOutlined style={{ fontSize: '1.5rem' }} />
          <Typography variant="h1" ml={1}>
            {totalGuests}
          </Typography>
        </Stack>
      </MainCard>
      <MainCard
        sx={{ mb: { xs: 1, sm: 0 }, ml: { xs: 0, sm: 1 } }}
        bgColor={theme.palette.info.dark}
      >
        <Typography variant="h6">Total de Eventos Realizados</Typography>
        <Stack
          width="100%"
          height="45px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <CalendarOutlined style={{ fontSize: '1.5rem' }} />
          <Typography variant="h1" ml={1}>
            {totalEvents}
          </Typography>
        </Stack>
      </MainCard>
      <MainCard
        sx={{ ml: { xs: 0, sm: 1 } }}
        bgColor={theme.palette.primary.main}
      >
        <Typography variant="h6">Próximo Evento</Typography>
        <Stack
          width="100%"
          height="45px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <CarryOutOutlined style={{ fontSize: '1.5rem' }} />
          <Typography variant="h1" ml={1}>
            {nextEvent}
          </Typography>
        </Stack>
      </MainCard>
    </Box>
  )
}

export default EventStats
