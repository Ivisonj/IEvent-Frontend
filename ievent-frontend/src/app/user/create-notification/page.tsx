import { Box, Typography } from '@mui/material'

import TextEditor from '@/components/textEditor'

const CreateNotification = () => {
  return (
    <Box width="100%" height="auto" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Notificação
      </Typography>
      <Box width="100%" height="auto">
        <TextEditor />
      </Box>
    </Box>
  )
}

export default CreateNotification
