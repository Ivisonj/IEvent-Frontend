'use client'
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { SendOutlined } from '@ant-design/icons'
import { Box, useTheme, TextField, IconButton } from '@mui/material'

import MainCard from '@/components/mainCard'
import HeadChat from './headChat'
import Message from './message'

interface MessageTypes {
  id: string
  userId: string
  avatarUrl?: string
  sentAt: string
  message: string
  type: 'sent' | 'received'
}

const conversation: MessageTypes[] = [
  {
    id: '01',
    userId: '001',
    avatarUrl: '',
    sentAt: '22:30',
    message: 'Bom dia! Gostaria de falar com você',
    type: 'received',
  },
  {
    id: '02',
    avatarUrl: '',
    userId: '002',
    sentAt: '22:31',
    message: 'Bom dia! Okay. vamos conversar.',
    type: 'sent',
  },
]

const ChatContent = () => {
  const theme = useTheme()
  const [inputValue, setInputValue] = useState<string | null>()

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value)
  }

  const [chat, setChat] = useState(conversation)

  const createMessage = () => {
    const newMessage: MessageTypes = {
      id: uuid(),
      userId: '0001',
      sentAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      message: inputValue!,
      type: 'sent',
    }

    setChat((prevChat) => {
      const updatedChat = [...prevChat]

      updatedChat.push(newMessage)

      return updatedChat
    })

    setInputValue('')
  }

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
          overflowY: 'scroll',
          p: 2,
          bgcolor: theme.palette.grey[200],
        }}
      >
        {chat.map((item: MessageTypes) => (
          <Message
            key={item.id}
            id={item.id}
            userId={item.userId}
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
            value={inputValue}
            onChange={handleChangeInputValue}
          />
        </Box>
        <Box sx={{ flex: '0 0 auto' }}>
          <IconButton onClick={createMessage}>
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
