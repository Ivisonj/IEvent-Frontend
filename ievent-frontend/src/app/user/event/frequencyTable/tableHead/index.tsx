import { TableHead, TableRow, TableCell } from '@mui/material'

interface HeadCell {
  id: string
  disablePadding: boolean
  align: 'left' | 'right' | 'center'
  label: string
}

const headCells: HeadCell[] = [
  {
    id: 'date',
    align: 'left',
    disablePadding: false,
    label: 'Data',
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Nome',
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'actions',
    align: 'left',
    disablePadding: false,
    label: 'Ações',
  },
]

const FrequencyTableHead = () => {
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

export default FrequencyTableHead
