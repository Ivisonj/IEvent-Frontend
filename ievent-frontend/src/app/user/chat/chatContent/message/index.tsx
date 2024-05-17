import { Box, Stack, Typography, Avatar, Card, useTheme } from '@mui/material'

interface MessageProps {
  id?: string
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
    backgroundcolor: 'red',
  }

  const sentMessageStyle = {
    maxWidth: '50%',
    height: 'auto',
    ml: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundcolor: 'red',
  }

  const ReceivedMessageComponent = (
    <Box sx={{ width: 4 / 4, height: 'auto', display: 'flex' }}>
      <Stack>
        <Avatar alt="avatar" src={avatarUrl} />
      </Stack>
      <Box sx={receivedMsgStyle}>
        <Card>
          <Typography variant="h6" p="8px">
            {message}
          </Typography>
        </Card>
        <Typography variant="body2">{'10:00'}</Typography>
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
        <Card sx={{ backgroundColor: theme.palette.primary.main }}>
          <Typography variant="h6" p="8px" color={theme.palette.common.white}>
            {message}
          </Typography>
        </Card>
        <Typography variant="body2">{sentAt}</Typography>
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
