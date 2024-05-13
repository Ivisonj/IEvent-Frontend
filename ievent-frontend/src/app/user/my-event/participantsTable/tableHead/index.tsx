import { TableHead, TableRow, TableCell } from '@mui/material'

import { ParticipantsTableHeadTypes } from '..'
import { Order } from '..'

interface HeadCell {
  id: keyof ParticipantsTableHeadTypes
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

interface ParticipantsTableHeadProps {
  order: Order
  orderBy: keyof ParticipantsTableHeadTypes
}

const ParticipantsTableHead = ({
  order,
  orderBy,
}: ParticipantsTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default ParticipantsTableHead
