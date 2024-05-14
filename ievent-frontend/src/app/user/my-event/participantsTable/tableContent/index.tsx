import { MessageOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Badge, TableBody, TableRow, TableCell } from '@mui/material'

import ParticipantStatus from './participantStatus'

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

const ParticipantsTableContent = () => {
  const handleShowMessageClick = (id: string) => {
    console.log(id)
  }

  const handleDeleteUserClick = (id: string) => {
    console.log(id)
  }
  return (
    <TableBody>
      {rows.map((row, index) => {
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
            <TableCell>
              <Button
                variant="text"
                sx={{ mr: 1, minWidth: '35px', height: '35px' }}
                onClick={() => handleShowMessageClick(row.id)}
              >
                <Badge badgeContent={2} color="primary">
                  <MessageOutlined style={{ fontSize: '1rem' }} />
                </Badge>
              </Button>
              <Button
                variant="text"
                sx={{ px: 0, minWidth: '35px', height: '35px' }}
                onClick={() => handleDeleteUserClick(row.id)}
              >
                <DeleteOutlined style={{ fontSize: '1rem' }} />
              </Button>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default ParticipantsTableContent
