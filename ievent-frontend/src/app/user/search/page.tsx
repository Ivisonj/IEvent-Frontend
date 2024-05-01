import { Box, Typography } from '@mui/material'

import SearchPageCard from '@/components/searchPageCard'

const eventData = [
  {
    id: '01',
    title: 'Ensaio Coral Jovem de Petrolina',
    createdBy: 'Ivison Joel',
  },
]

const SearchPage = () => {
  return (
    <Box width="100%" flexDirection="column">
      <Typography variant="h5" mb={1}>
        Buscar Evento
      </Typography>
      {eventData.map((item) => (
        <SearchPageCard
          key={item.id}
          title={item.title}
          createdBy={item.createdBy}
        />
      ))}
    </Box>
  )
}

export default SearchPage
