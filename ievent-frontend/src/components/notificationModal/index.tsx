import { CloseOutlined } from '@ant-design/icons'
import { Box, Card, Modal, IconButton } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  p: 4,
}

interface NotificationModalProps {
  open: boolean
  title: string
  message: string
  type: 'solicitation' | 'message' | 'alert' | 'cancel'
  handleClose: () => void
}

const NotificationModal = ({
  open,
  title,
  message,
  type,
  handleClose,
}: NotificationModalProps) => {
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
            teste
          </Box>
        </Card>
      </Modal>
    </div>
  )
}

export default NotificationModal
