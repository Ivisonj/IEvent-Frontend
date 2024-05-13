'use client'
import {
  Box,
  useTheme,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'

import MainCard from '@/components/mainCard'
import ParticipantsTableHead from './tableHead'

export interface ParticipantsTableHeadTypes {
  id: string
  name: string
  attendance: number
  delays: number
  absences: number
  actions: any
}

const ParticipantsTable = () => {
  const theme = useTheme()

  const order = 'asc'
  const orderBy = 'id'

  return (
    <Box width="100%">
      <MainCard
        width="100%"
        borderRadius="8px"
        p="0px"
        bgColor={theme.palette.common.white}
      >
        <TableContainer
          sx={{
            width: '100%',
            overflowX: 'auto',
            position: 'relative',
            display: 'block',
            maxWidth: '100%',
            '& td, & th': { whiteSpace: 'nowrap' },
          }}
        >
          <Table aria-labelledby="tableTitle">
            <ParticipantsTableHead order={order} orderBy={orderBy} />
          </Table>
        </TableContainer>
      </MainCard>
    </Box>
  )
}

export default ParticipantsTable
