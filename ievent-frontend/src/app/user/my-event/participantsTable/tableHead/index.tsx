import { TableHead, TableRow, TableCell } from '@mui/material'

interface HeadCell {
  id: string
  disablePadding: boolean
  align: 'left' | 'right' | 'center'
  label: string
}

const headCells: HeadCell[] = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    label: '#',
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Nome',
  },
  {
    id: 'attendance',
    align: 'left',
    disablePadding: false,
    label: 'Presenças',
  },
  {
    id: 'delays',
    align: 'left',
    disablePadding: false,
    label: 'Atrasos',
  },
  {
    id: 'absences',
    align: 'left',
    disablePadding: false,
    label: 'Faltas',
  },
  {
    id: 'actions',
    align: 'left',
    disablePadding: false,
    label: 'Ações',
  },
]

const ParticipantsTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default ParticipantsTableHead
