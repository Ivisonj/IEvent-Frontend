'use client'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { Box, Typography, Stack, useTheme } from '@mui/material'

import MainCard from '../mainCard'

interface EventStatsProps {
  totalGuests: number
  totalEvents: number
}

const EventStats = ({ totalGuests, totalEvents }: EventStatsProps) => {
  const theme = useTheme()
  return (
    <Box
      width="100%"
      sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
    >
      <Box sx={{ mb: { xs: 1, sm: 0 } }}>
        <MainCard bgColor={theme.palette.success.dark}>
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
      </Box>
      <Box sx={{ ml: { xs: 0, sm: 1 } }}>
        <MainCard bgColor={theme.palette.info.dark}>
          <Typography variant="h6">Total de Eventos</Typography>
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
      </Box>
    </Box>
  )
}

export default EventStats
