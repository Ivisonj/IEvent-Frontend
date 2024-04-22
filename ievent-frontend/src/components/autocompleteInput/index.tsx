import { TextField, Autocomplete } from '@mui/material'

interface InputProps {
  options: any
}

const AutocompleteInput = ({ options }: InputProps) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Buscar evento..." />
      )}
    />
  )
}

export default AutocompleteInput
