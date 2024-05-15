import { MessageOutlined } from '@ant-design/icons'
import { Button, Badge, TableBody, TableRow, TableCell } from '@mui/material'

import FrequencyStatus from '../frequencyStatus'

const rows = [
  {
    id: '01',
    date: '04-05-2024',
    name: 'Ensaio Coral Jovem de Petrolina',
    status: 'presence',
  },
  {
    id: '02',
    date: '11-05-2024',
    name: 'Ensaio Coral Jovem de Petrolina',
    status: 'delay',
  },
  {
    id: '03',
    date: '18-05-2024',
    name: 'Ensaio Coral Jovem de Petrolina',
    status: 'absence',
  },
  {
    id: '04',
    date: '25-05-2024',
    name: 'Ensaio Coral Jovem de Petrolina',
    status: 'presence',
  },
]

const FrequencyTableContent = () => {
  const handleShowMessageClick = (id: string) => {
    console.log(id)
  }

  return (
    <TableBody>
      {rows.map((row) => {
        return (
          <TableRow
            hover
            role="checkbox"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            tabIndex={-1}
            key={row.id}
          >
            <TableCell component="th">{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>
              <FrequencyStatus status={row.status} />
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
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default FrequencyTableContent
