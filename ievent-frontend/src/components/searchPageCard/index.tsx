'use client'
import { UserOutlined } from '@ant-design/icons'
import { Typography, Stack } from '@mui/material'

import TransparentButton from '../transparentButton'
import MainCard from '../mainCard'

interface SearchPageCardProps {
  title: string
  createdBy: string
}

const SearchPageCard = ({ title, createdBy }: SearchPageCardProps) => {
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
          <UserOutlined style={{ fontSize: '1.5rem' }} />
        </Stack>
        <Stack width="98%" height="100%" direction="column">
          <Typography variant="h6">Criado Por</Typography>
          <Typography variant="h5">{createdBy}</Typography>
        </Stack>
      </Stack>
      <Stack width="100%" alignItems="flex-end">
        <TransparentButton>Solicitar</TransparentButton>
      </Stack>
    </MainCard>
  )
}

export default SearchPageCard
