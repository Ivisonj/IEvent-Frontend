import { Box, Stack, Typography, Avatar, Card, useTheme } from '@mui/material'

interface MessageProps {
  id?: string
  userId?: string
  avatarUrl?: string
  sentAt: string
  message: string
  type: 'sent' | 'received'
}

const Message = ({ avatarUrl, sentAt, message, type }: MessageProps) => {
  const theme = useTheme()

  const receivedMsgStyle = {
    maxWidth: '50%',
    height: 'auto',
    ml: '10px',
    display: 'flex',
    flexDirection: 'column',
  }

  const sentMessageStyle = {
    maxWidth: '50%',
    height: 'auto',
    ml: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }

  const ReceivedMessageComponent = (
    <Box sx={{ width: '100%', height: 'auto', display: 'flex' }}>
      <Stack>
        <Avatar alt="avatar" src={avatarUrl} />
      </Stack>
      <Box sx={receivedMsgStyle}>
        <Card variant="outlined">
          <Typography variant="h6" p="8px">
            {message}
          </Typography>
        </Card>
        <Typography variant="body2" color={theme.palette.common.black}>
          {sentAt}
        </Typography>
      </Box>
    </Box>
  )

  const SentMessageComponent = (
    <Box
      sx={{
        width: 4 / 4,
        height: 'auto',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Box sx={sentMessageStyle}>
        <Card
          variant="outlined"
          sx={{ backgroundColor: theme.palette.primary.main }}
        >
          <Typography variant="h6" p="8px" color={theme.palette.common.white}>
            {message}
          </Typography>
        </Card>
        <Typography variant="body2" color={theme.palette.common.black}>
          {sentAt}
        </Typography>
      </Box>
      <Stack ml="10px">
        <Avatar alt="avatar" src={avatarUrl} />
      </Stack>
    </Box>
  )

  return (
    <>
      {type === 'sent' && SentMessageComponent}
      {type === 'received' && ReceivedMessageComponent}
    </>
  )
}

export default Message
