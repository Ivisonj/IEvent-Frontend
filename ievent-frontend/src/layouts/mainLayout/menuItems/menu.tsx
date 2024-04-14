import HomeIcon from '@mui/icons-material/Home'
import EventNoteIcon from '@mui/icons-material/EventNote'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import PersonIcon from '@mui/icons-material/Person'

const icons = {
  HomeIcon,
  EventNoteIcon,
  BorderColorOutlinedIcon,
  PersonIcon,
}

const menu = {
  id: 'menu-group',
  title: 'Menu',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: 'user/home',
      icon: icons.HomeIcon,
      breadcrumbs: true,
    },
    {
      id: 'events',
      title: 'Eventos',
      type: 'item',
      url: 'user/events',
      icon: icons.EventNoteIcon,
      breadcrumbs: true,
    },
    {
      id: 'create',
      title: 'Criar Evento',
      type: 'item',
      url: 'user/create-event',
      icon: icons.BorderColorOutlinedIcon,
      breadcrumbs: true,
    },
  ],
}

export default menu
