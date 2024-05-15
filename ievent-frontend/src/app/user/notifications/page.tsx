import { Box, Typography } from '@mui/material'

import Notification from '@/components/notification'

const NotificationsPage = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5">Notificações</Typography>
      <Box width="100%" height="auto" flexDirection="column">
        <Notification />
      </Box>
    </Box>
  )
}

export default NotificationsPage
