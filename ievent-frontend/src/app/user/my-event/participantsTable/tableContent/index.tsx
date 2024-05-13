import { TableBody, TableRow, TableCell } from '@mui/material'

import { ParticipantsTableHeadTypes, Order } from '..'
import ParticipantStatus from './participantStatus'

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const rows = [
  {
    id: '01',
    name: 'Maria Clara',
    attendance: 10,
    delays: 2,
    absences: 3,
    frequency: 'good',
  },
  {
    id: '02',
    name: 'João Silva',
    attendance: 5,
    delays: 1,
    absences: 4,
    frequency: 'attention',
  },
  {
    id: '03',
    name: 'Matheus Oliveira',
    attendance: 7,
    delays: 3,
    absences: 5,
    frequency: 'bad',
  },
]

interface ParticipantsTableContentProps {
  order: Order
  orderBy: keyof ParticipantsTableHeadTypes
}

const ParticipantsTableContent = ({
  order,
  orderBy,
}: ParticipantsTableContentProps) => {
  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
        const labelId = `enhanced-table-checkbox-${index}`

        return (
          <TableRow
            hover
            role="checkbox"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            tabIndex={-1}
            key={row.id}
          >
            <TableCell component="th" id={labelId} scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.attendance}</TableCell>
            <TableCell>{row.delays}</TableCell>
            <TableCell>
              <ParticipantStatus
                frequency={String(row.frequency)}
                absences={Number(row.absences)}
              />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default ParticipantsTableContent
