'use client'
import { Box, useTheme, TableContainer, Table } from '@mui/material'

import MainCard from '@/components/mainCard'
import ParticipantsTableHead from './tableHead'
import ParticipantsTableContent from './tableContent'

export interface ParticipantsTableDataTypes {
  id: string
  name: string
  attendance: number
  delays: number
  absences: number
  frequency: string
}

const ParticipantsTable = () => {
  const theme = useTheme()

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
            <ParticipantsTableHead />
            <ParticipantsTableContent />
          </Table>
        </TableContainer>
      </MainCard>
    </Box>
  )
}

export default ParticipantsTable
