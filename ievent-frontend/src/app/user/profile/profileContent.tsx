'use client'
import {
  Box,
  Stack,
  Typography,
  Avatar,
  useTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import {
  CarryOutOutlined,
  PoweroffOutlined,
  CalendarOutlined,
} from '@ant-design/icons'

const ProfileContent = () => {
  const theme = useTheme()

  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          width: { xs: '100%', sm: '50%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            width: 100,
            height: 100,
            borderRadius: '30px',
            my: 1,
          }}
        >
          I
        </Avatar>
        <Typography variant="h4">Ivison Joel</Typography>
        <Typography variant="h6">ivison@mail.com</Typography>
      </Stack>
      <Stack
        sx={{
          width: { xs: '100%', sm: '50%' },
          display: 'flex',
        }}
        py={3}
      >
        <List
          component="nav"
          sx={{
            p: 0,
            '& .MuiListItemIcon-root': {
              minWidth: 32,
              color: theme.palette.grey[500],
            },
          }}
        >
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" alignItems="center">
              <ListItemIcon>
                <CarryOutOutlined />
              </ListItemIcon>
              <ListItemText primary="Meus Eventos" />
            </Stack>
            <Typography>2</Typography>
          </ListItemButton>
        </List>
        <List
          component="nav"
          sx={{
            p: 0,
            '& .MuiListItemIcon-root': {
              minWidth: 32,
              color: theme.palette.grey[500],
            },
          }}
        >
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" alignItems="center">
              <ListItemIcon>
                <CalendarOutlined />
              </ListItemIcon>
              <ListItemText primary="Eventos que Participo" />
            </Stack>
            <Typography>5</Typography>
          </ListItemButton>
        </List>
        <List
          component="nav"
          sx={{
            p: 0,
            '& .MuiListItemIcon-root': {
              minWidth: 32,
              color: theme.palette.grey[500],
            },
          }}
        >
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Stack direction="row" alignItems="center">
              <ListItemIcon>
                <PoweroffOutlined />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </Stack>
          </ListItemButton>
        </List>
      </Stack>
    </Box>
  )
}

export default ProfileContent
