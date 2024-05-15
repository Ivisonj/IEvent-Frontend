'use client'
import { Box, useTheme, TableContainer, Table } from '@mui/material'

import MainCard from '@/components/mainCard'
import FrequencyTableHead from './tableHead'
import FrequencyTableContent from './tableContent'

const FrequencyTable = () => {
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
            <FrequencyTableHead />
            <FrequencyTableContent />
          </Table>
        </TableContainer>
      </MainCard>
    </Box>
  )
}

export default FrequencyTable
