import { BellOutlined, ExpandOutlined } from '@ant-design/icons'
import {
  Box,
  Button,
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
      sx={{ px: { xs: 1, lg: 3 } }}
    >
      <Stack direction="row" alignItems="center">
        {matchDownMd && (
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>I</Avatar>
        )}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Button variant="text" sx={{ px: 0, minWidth: '48px' }}>
          <IconButton disableRipple sx={{ color: 'text.primary' }}>
            <BellOutlined />
          </IconButton>
        </Button>
        <Button variant="text" sx={{ px: 0, minWidth: '48px' }}>
          <IconButton disableRipple sx={{ color: 'text.primary' }}>
            <ExpandOutlined />
          </IconButton>
        </Button>
      </Stack>
    </Box>
  )
}

export default HeaderContent
