'use client'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Notification from '@/components/notification'
import NotificationModal from '@/components/notificationModal'

interface NotificationsTypes {
  id: string
  userName: string
  sentAt: string
  date: string
  readed: boolean
  type: 'solicitation' | 'message' | 'cancel'
}

const data: NotificationsTypes[] = [
  {
    id: '01',
    userName: 'Ivison Joel',
    sentAt: '15:30',
    date: '10 Mai, 2024',
    readed: false,
    type: 'solicitation',
  },
  {
    id: '02',
    userName: 'Maria Julia',
    sentAt: '10:00',
    date: '09 Mai, 2024',
    readed: true,
    type: 'message',
  },
  {
    id: '03',
    userName: 'Ivison Joel',
    sentAt: '09:00',
    date: '11 Mai, 2024',
    readed: true,
    type: 'alert',
  },
  {
    id: '04',
    userName: 'Coral Jovem',
    sentAt: '17:30',
    date: '08 Mai, 2024',
    readed: true,
    type: 'cancel',
  },
]

const NotificationsPage = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [selectedId, setSelectedId] = useState<string>('')
  const handleGetItemIdclick = (id: string) => {
    setSelectedId(id)
    setOpen(true)
  }
  return (
    <>
      <Box width="100%" height="auto" flexDirection="column">
        <Typography variant="h5">Notificações</Typography>
        <Box width="100%" height="auto" flexDirection="column">
          {data.map((item: NotificationsTypes) => (
            <Notification
              key={item.id}
              id={item.id}
              userName={item.userName}
              sentAt={item.sentAt}
              date={item.date}
              readed={item.readed}
              type={item.type}
              onCLick={() => handleGetItemIdclick(item.id)}
            />
          ))}
        </Box>
      </Box>
      <NotificationModal open={open} handleClose={handleClose} />
    </>
  )
}

export default NotificationsPage
