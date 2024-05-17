import { AppBar, Typography, Stack, Avatar, useTheme } from '@mui/material'

interface HeadChatProps {
  userName: string
}

const HeadChat = ({ userName }: HeadChatProps) => {
  const theme = useTheme()
  return (
    <AppBar
      sx={{
        p: 1,
        bgcolor: 'inherit',
        color: theme.palette.common.black,
        position: 'relative',
        boxShadow: 'none',
        borderBottom: `solid 1px ${theme.palette.grey[100]}`,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>I</Avatar>
        <Typography variant="h5">{userName}</Typography>
      </Stack>
    </AppBar>
  )
}

export default HeadChat
