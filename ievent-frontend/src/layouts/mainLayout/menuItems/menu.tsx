import HomeIcon from '@mui/icons-material/Home'
import EventNoteIcon from '@mui/icons-material/EventNote'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'

const icons = {
  HomeIcon,
  EventNoteIcon,
  SearchIcon,
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
      id: 'serach',
      title: 'Buscar',
      type: 'item',
      url: 'user/search',
      icon: icons.SearchIcon,
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
      id: 'profile',
      title: 'Perfil',
      type: 'item',
      url: 'user/profile',
      icon: icons.PersonIcon,
      breadcrumbs: true,
    },
  ],
}

export default menu
