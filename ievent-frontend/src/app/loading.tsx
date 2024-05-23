import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  const progressStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <Box sx={progressStyle}>
      <CircularProgress />
    </Box>
  )
}

export default Loading
