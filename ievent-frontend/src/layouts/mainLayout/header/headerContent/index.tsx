import { BellOutlined, ExpandOutlined } from '@ant-design/icons'
import {
  Box,
  Stack,
  Avatar,
  useTheme,
  IconButton,
  useMediaQuery,
} from '@mui/material'

const HeaderContent = () => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" px={1}>
        {matchDownMd && (
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>I</Avatar>
        )}
      </Stack>
      <Stack direction="row" alignItems="center" px={1}>
        <IconButton disableRipple sx={{ color: 'text.primary' }}>
          <BellOutlined />
        </IconButton>
        <IconButton disableRipple sx={{ color: 'text.primary' }}>
          <ExpandOutlined />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default HeaderContent
