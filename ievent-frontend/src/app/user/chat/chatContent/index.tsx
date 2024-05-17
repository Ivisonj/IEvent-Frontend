'use client'
import { SendOutlined } from '@ant-design/icons'
import { Box, useTheme, TextField, IconButton } from '@mui/material'

import MainCard from '@/components/mainCard'
import HeadChat from './headChat'
import Message from './message'

interface MessageTypes {
  id: string
  avatarUrl?: string
  sentAt: string
  message: string
  type: 'sent' | 'received'
}

const data: MessageTypes[] = [
  {
    id: '01',
    avatarUrl: '',
    sentAt: '22:30',
    message: 'Bom dia! Gostaria de falar com você',
    type: 'received',
  },
  {
    id: '02',
    avatarUrl: '',
    sentAt: '22:31',
    message: 'Bom dia! Okay. vamos conversar.',
    type: 'sent',
  },
]

const ChatContent = () => {
  const theme = useTheme()
  return (
    <MainCard
      width="100%"
      height="94%"
      p="0px"
      borderRadius="5px"
      bgColor={theme.palette.common.white}
    >
      <HeadChat userName="Ivison Joel" />
      <Box
        sx={{
          width: '100%',
          height: { xs: '80%', lg: '59%' },
          p: 2,
          bgcolor: theme.palette.grey[100],
        }}
      >
        {data.map((item: MessageTypes) => (
          <Message
            key={item.id}
            id={item.id}
            avatarUrl={item.avatarUrl}
            sentAt={item.sentAt}
            message={item.message}
            type={item.type}
          />
        ))}
      </Box>
      <Box
        component="form"
        sx={{
          width: '100%',
          p: '16px 0px 0px 16px',
          display: 'flex',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ flex: '1 1 auto' }}>
          <TextField
            id="standard-multiline-static"
            placeholder="Sua menssagem..."
            multiline
            rows={3}
            variant="standard"
            fullWidth
          />
        </Box>
        <Box sx={{ flex: '0 0 auto' }}>
          <IconButton>
            <SendOutlined
              style={{
                fontSize: '1.5rem',
                color: theme.palette.primary.main,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </MainCard>
  )
}

export default ChatContent
