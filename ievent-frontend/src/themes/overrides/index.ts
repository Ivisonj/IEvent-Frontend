import { merge } from 'lodash'

import Badge from './badge'
import Button from './button'
import CardContent from './cardContent'
import Checkbox from './checkbox'
import Chip from './chip'
import IconButton from './iconButton'
import InputLabel from './inputLabel'
import LinearProgress from './linearProgress'
import Link from './link'
import ListItemIcon from './listItemIcon'
import OutlinedInput from './outlinedInput'
import Tab from './tab'
import TableCell from './tableCell'
import Tabs from './tabs'
import Typography from './typography'
import TableHead from './tableHead'

export default function ComponentsOverrides(theme: any) {
  return merge(
    Button(theme),
    Badge(theme),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    IconButton(theme),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemIcon(),
    OutlinedInput(theme),
    TableHead(theme),
    Tab(theme),
    TableCell(theme),
    Tabs(),
    Typography(),
  )
}