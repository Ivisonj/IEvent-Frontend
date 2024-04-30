import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

import { activeItem } from '@/store/reducers/menu'
import Link from 'next/link'

interface NavItemProps {
  item: any
}

const NavItem = ({ item }: NavItemProps) => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const { openItem } = useSelector((state: any) => state.menu)

  let itemTarget = '_self'
  if (item.target) {
    itemTarget = '_blank'
  }
  const LinkComponent = forwardRef<HTMLAnchorElement, any>((props, ref) => {
    const newProps = {
      ...props,
      href: `/${item.url}`,
      target: itemTarget,
    }

    return <Link ref={ref} {...newProps} />
  })

  let listItemProps: any = { component: LinkComponent }
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget }
  }

  const itemHandler = (id: any & void) => {
    dispatch(activeItem({ openItem: [id] }))
  }

  const Icon = item.icon
  const itemIcon = item.icon ? <Icon style={{ fontSize: '1rem' }} /> : false

  const isSelected = openItem.findIndex((id: any) => id === item.id) > -1

  const textColor = theme.palette.grey[600]
  const iconSelectedColor = theme.palette.common.white

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        px: 0,
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            borderRadius: 1.5,
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography
            variant="h6"
            sx={{ color: isSelected ? iconSelectedColor : textColor }}
          >
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  )
}

export default NavItem
