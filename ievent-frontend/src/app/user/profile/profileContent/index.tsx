'use client'
import { useState } from 'react'
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
  EditOutlined,
  PoweroffOutlined,
  RightOutlined,
} from '@ant-design/icons'

const ProfileContent = () => {
  const theme = useTheme()

  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

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
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <Stack direction="row" alignItems="center">
              <ListItemIcon>
                <EditOutlined />
              </ListItemIcon>
              <ListItemText primary="Editar Perfil" />
            </Stack>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <RightOutlined />
            </ListItemIcon>
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
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <Stack direction="row" alignItems="center">
              <ListItemIcon>
                <PoweroffOutlined />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </Stack>
            <ListItemIcon sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <RightOutlined />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Stack>
    </Box>
  )
}

export default ProfileContent
