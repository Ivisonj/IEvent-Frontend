import {
  UserAddOutlined,
  MessageOutlined,
  FrownOutlined,
} from '@ant-design/icons'
import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Divider,
} from '@mui/material'

interface NotificationProps {
  id: string
  userName: string
  sentAt: string
  date: string
  readed: boolean
  type: 'solicitation' | 'message' | 'cancel'
}
const Notification = ({
  userName,
  sentAt,
  date,
  readed,
  type,
}: NotificationProps) => {
  const notificationData =
    type === 'solicitation'
      ? {
        bgcolor: 'success.lighter',
        color: 'success.main',
        text: `${userName} enviou uma solicitação.`,
      }
      : type === 'message'
        ? {
          bgcolor: 'info.lighter',
          color: 'info.main',
          text: `${userName} enviou uma menssagem.`,
        }
        : type === 'cancel'
          ? {
            bgcolor: 'error.lighter',
            color: 'error.main',
            text: `${userName} cancelou o evento.`,
          }
          : null
  return (
    <List
      component="nav"
      sx={{
        bgcolor: !readed ? 'primary.lighter' : '',
      }}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            sx={{
              color: notificationData?.color,
              bgcolor: notificationData?.bgcolor,
            }}
          >
            {type === 'solicitation' && <UserAddOutlined />}
            {type === 'message' && <MessageOutlined />}
            {type === 'cancel' && <FrownOutlined />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h6">{notificationData?.text}</Typography>
          }
          secondary={date}
        />
        <ListItemSecondaryAction>
          <Typography variant="caption" noWrap>
            {sentAt}
          </Typography>
        </ListItemSecondaryAction>
      </ListItemButton>
      <Divider />
    </List>
  )
}

export default Notification
