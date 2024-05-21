import {
  UserAddOutlined,
  MessageOutlined,
  ExclamationCircleOutlined,
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
  type: 'solicitation' | 'message' | 'alert' | 'cancel'
  onCLick: () => void
}
const Notification = ({
  userName,
  sentAt,
  date,
  readed,
  type,
  onCLick,
}: NotificationProps) => {
  const notificationStyle =
    type === 'solicitation'
      ? {
        bgcolor: 'success.lighter',
        color: 'success.main',
        text: 'enviou uma solicitação.',
      }
      : type === 'message'
        ? {
          bgcolor: 'info.lighter',
          color: 'info.main',
          text: 'enviou uma menssagem.',
        }
        : type === 'alert'
          ? {
            bgcolor: 'warning.lighter',
            color: 'warning.main',
            text: 'tem uma informção importante.',
          }
          : type === 'cancel'
            ? {
              bgcolor: 'error.lighter',
              color: 'error.main',
              text: 'cancelou o evento.',
            }
            : null
  return (
    <List
      component="nav"
      sx={{
        bgcolor: !readed ? 'primary.lighter' : '',
      }}
    >
      <ListItemButton
        onClick={onCLick}
        sx={{
          ':hover': {
            bgcolor: !readed ? 'primary.lighter' : '',
          },
        }}
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              color: notificationStyle?.color,
              bgcolor: notificationStyle?.bgcolor,
            }}
          >
            {type === 'solicitation' && <UserAddOutlined />}
            {type === 'message' && <MessageOutlined />}
            {type === 'alert' && <ExclamationCircleOutlined />}
            {type === 'cancel' && <FrownOutlined />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h6">
              <Typography component="span" variant="subtitle1">
                {userName}
              </Typography>{' '}
              {notificationStyle?.text}
            </Typography>
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
