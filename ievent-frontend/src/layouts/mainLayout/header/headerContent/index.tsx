import { useState, useEffect } from 'react'
import { BellOutlined, ExpandOutlined } from '@ant-design/icons'
import {
  Box,
  Button,
  Stack,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material'

const HeaderContent = () => {
  const theme = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

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
        <Button variant="text" sx={{ px: 0, minWidth: '48px', height: '48px' }}>
          <BellOutlined style={{ color: theme.palette.common.black }} />
        </Button>
        <Button variant="text" sx={{ px: 0, minWidth: '48px', height: '48px' }}>
          <ExpandOutlined style={{ color: theme.palette.common.black }} />
        </Button>
      </Stack>
    </Box>
  )
}

export default HeaderContent
