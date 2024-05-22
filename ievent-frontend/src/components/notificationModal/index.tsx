import {
  UserAddOutlined,
  MessageOutlined,
  ExclamationCircleOutlined,
  FrownOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import {
  Box,
  Typography,
  Card,
  Modal,
  IconButton,
  Stack,
  Avatar,
  useTheme,
} from '@mui/material'

import IButton from '../Ibutton'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', lg: '40%' },
  bgcolor: 'background.paper',
  p: 4,
}

interface NotificationsTypes {
  id: string
  userName: string
  message?: string | null
  sentAt: string
  date: string
  readed: boolean
  type: 'solicitation' | 'message' | 'alert' | 'cancel'
}

interface NotificationModalProps {
  open: boolean
  notificationData: NotificationsTypes
  handleClose: () => void
}

const NotificationModal = ({
  open,
  notificationData,
  handleClose,
}: NotificationModalProps) => {
  const theme = useTheme()
  const notificationStyle =
    notificationData?.type === 'solicitation'
      ? {
        bgcolor: 'success.lighter',
        color: 'success.main',
        text: 'enviou uma solicitação.',
      }
      : notificationData?.type === 'message'
        ? {
          bgcolor: 'info.lighter',
          color: 'info.main',
          text: 'enviou uma menssagem.',
        }
        : notificationData?.type === 'alert'
          ? {
            bgcolor: 'warning.lighter',
            color: 'warning.main',
            text: 'tem uma informção importante.',
          }
          : notificationData?.type === 'cancel'
            ? {
              bgcolor: 'error.lighter',
              color: 'error.main',
              text: 'cancelou o evento.',
            }
            : null
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card variant="outlined" sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            <CloseOutlined />
          </IconButton>
          <Box width="100%" height="auto" flexDirection="column">
            <Stack width="100%" alignItems="center" direction="row">
              <Avatar
                sx={{
                  color: notificationStyle?.color,
                  bgcolor: notificationStyle?.bgcolor,
                  mr: 1,
                }}
              >
                {notificationData?.type === 'solicitation' && (
                  <UserAddOutlined />
                )}
                {notificationData?.type === 'message' && <MessageOutlined />}
                {notificationData?.type === 'alert' && (
                  <ExclamationCircleOutlined />
                )}
                {notificationData?.type === 'cancel' && <FrownOutlined />}
              </Avatar>
              <Typography variant="h6">
                <Typography component="span" variant="subtitle1">
                  {notificationData?.userName}
                </Typography>{' '}
                {notificationStyle?.text}
              </Typography>
            </Stack>
            <Box width="100%" p={1} flex="column">
              {notificationData?.message}
            </Box>
            <Box width="100%" display="flex" justifyContent="flex-end">
              {notificationData?.type === 'solicitation' && (
                <Box>
                  <IButton
                    width="100px"
                    type="button"
                    mx="5px"
                    bgColor={theme.palette.common.white}
                    border={theme.palette.primary.main}
                    color={theme.palette.common.black}
                    hover={theme.palette.grey[200]}
                  >
                    Cancelar
                  </IButton>
                  <IButton width="100px" type="button">
                    Aceitar
                  </IButton>
                </Box>
              )}
              {notificationData?.type === 'message' && (
                <IButton width="100px" type="button">
                  Ver
                </IButton>
              )}
            </Box>
          </Box>
        </Card>
      </Modal>
    </div>
  )
}

export default NotificationModal
