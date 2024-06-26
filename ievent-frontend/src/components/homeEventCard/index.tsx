'use client'
import { ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Typography, Stack, Avatar, AvatarGroup } from '@mui/material'

import MainCard from '../mainCard'

interface HomeEventCardProps {
  title: string
  date: string
  time: string
  address: string
}

const HomeEventCard = ({ title, date, time, address }: HomeEventCardProps) => {
  return (
    <MainCard>
      <Stack
        width="100%"
        mb={1}
        sx={{
          display: '-webkit-box',
          WebkitLineClamp: '1',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h4">{title}</Typography>
      </Stack>
      <Stack width="100%" height="45px" direction="row" mb={1}>
        <Stack
          width="12%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <ClockCircleOutlined style={{ fontSize: '1.5rem' }} />
        </Stack>
        <Stack width="98%" height="100%" direction="column">
          <Typography variant="h6">Data e Hora</Typography>
          <Stack width="100%" direction="row">
            <Typography pr={1} borderRight={`solid 1px`} variant="h5">
              {date}
            </Typography>
            <Typography pl={1} variant="h5">
              {time}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack width="100%" height="45px" direction="row" mb={1}>
        <Stack
          width="12%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <EnvironmentOutlined style={{ fontSize: '1.5rem' }} />
        </Stack>
        <Stack width="98%" height="100%" direction="column">
          <Typography variant="h6">Endereço</Typography>
          <Typography
            variant="h5"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: '1',
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden',
            }}
          >
            {address}
          </Typography>
        </Stack>
      </Stack>
      <Stack width="100%" alignItems="flex-start">
        <AvatarGroup max={3}>
          <Avatar alt="Remy Sharp" src="" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar alt="Agnes Walker" src="" />
        </AvatarGroup>
      </Stack>
    </MainCard>
  )
}

export default HomeEventCard
