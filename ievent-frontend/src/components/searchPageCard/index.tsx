'use client'
import { UserOutlined } from '@ant-design/icons'
import { Card, Typography, Stack, Button, useTheme } from '@mui/material'

interface SearchPageCardProps {
  title: string
  createdBy: string
}

const SearchPageCard = ({ title, createdBy }: SearchPageCardProps) => {
  const theme = useTheme()
  return (
    <Card
      variant="outlined"
      sx={{
        width: 398,
        p: 2,
        borderRadius: 5,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        cursor: 'pointer',
      }}
    >
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
        <Button
          variant="outlined"
          sx={{
            width: '40%',
            borderRadius: '20px',
            bgcolor: theme.palette.grey[100],
            color: theme.palette.common.black,
            opacity: '50%',
            '&:hover': {
              bgcolor: theme.palette.grey[300],
            },
          }}
        >
          Solicitar
        </Button>
      </Stack>
    </Card>
  )
}

export default SearchPageCard
