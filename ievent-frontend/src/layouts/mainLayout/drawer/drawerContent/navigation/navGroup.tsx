import { useSelector } from 'react-redux'
import { Box, List, Typography } from '@mui/material'
import NavItem from './navItem'

interface MenuItem {
  id: string
  type: 'item'
  title: string
  children: any
}

interface NavGroupProps {
  item: MenuItem
}

const NavGroup = ({ item }: NavGroupProps) => {
  const navCollapse = item.children?.map((menuItem: any) => {
    switch (menuItem.type) {
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />
      default:
        return (
          <Typography
            key={menuItem.id}
            variant="h6"
            color="error"
            align="center"
          >
            Fix - Group Collapse or Items
          </Typography>
        )
    }
  })

  return (
    <List
      subheader={
        item.title && (
          <Box sx={{ pl: 0, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: 1.5, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  )
}

export default NavGroup
