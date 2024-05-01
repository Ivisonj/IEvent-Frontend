import { Box, Typography } from '@mui/material'

import ProfileContent from './profileContent'

const Profile = () => {
  return (
    <Box width="100%" flexDirection="column">
      <Typography variant="h5">Perfil</Typography>
      <ProfileContent />
    </Box>
  )
}

export default Profile
