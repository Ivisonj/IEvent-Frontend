'use client'
import {
  CheckOutlined,
  WarningOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { Box, Typography, Stack, useTheme } from '@mui/material'

import MainCard from '../mainCard'

interface ParticipantStatsProps {
  attendance: number
  delays: number
  absences: number
}

const ParticipantStats = ({
  attendance,
  delays,
  absences,
}: ParticipantStatsProps) => {
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
        <Typography variant="h6">Presenças</Typography>
        <Stack
          width="100%"
          height="45px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <CheckOutlined style={{ fontSize: '1.5rem' }} />
          <Typography variant="h1" ml={1}>
            {attendance}
          </Typography>
        </Stack>
      </MainCard>
      <MainCard
        sx={{ mb: { xs: 1, sm: 0 }, ml: { xs: 0, sm: 1 } }}
        bgColor={theme.palette.warning.main}
      >
        <Typography variant="h6">Atrasos</Typography>
        <Stack
          width="100%"
          height="45px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <WarningOutlined style={{ fontSize: '1.5rem' }} />
          <Typography variant="h1" ml={1}>
            {delays}
          </Typography>
        </Stack>
      </MainCard>
      <MainCard
        sx={{ ml: { xs: 0, sm: 1 } }}
        bgColor={theme.palette.error.main}
      >
        <Typography variant="h6">Faltas</Typography>
        <Stack
          width="100%"
          height="45px"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <CloseOutlined style={{ fontSize: '1.5rem' }} />
          <Typography variant="h1" ml={1}>
            {absences}
          </Typography>
        </Stack>
      </MainCard>
    </Box>
  )
}

export default ParticipantStats
