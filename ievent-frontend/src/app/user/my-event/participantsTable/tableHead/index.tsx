import { TableHead, TableRow, TableCell } from '@mui/material'
import { ParticipantsTableHeadTypes } from '..'

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1
//   }
//   return 0
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy)
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index])
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0])
//     if (order !== 0) {
//       return order
//     }
//     return a[1] - b[1]
//   })
//   return stabilizedThis.map((el) => el[0])
// }

// function createData(
//   id: string,
//   name: string,
//   attendance: number,
//   delays: number,
//   absences: number,
//   actions: any,
// ) {
//   return { id, name, attendance, delays, absences, actions }
// }

// const rows = [
//   createData('01', 'Maria Clara', 10, 2, 1, 'test'),
//   createData('02', 'Felipe Silva', 10, 2, 1, 'test'),
//   createData('03', 'João Felipe', 10, 2, 1, 'test'),
// ]

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

type Order = 'desc' | 'asc'

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
