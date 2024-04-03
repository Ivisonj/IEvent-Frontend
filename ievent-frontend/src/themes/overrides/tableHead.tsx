import { Theme } from '@mui/material/styles'

export default function TableHead(theme: Theme) {
    return {
        MuiTableHead: {
            styleOverrides: {
              root: {
                backgroundColor: theme.palette.grey[50],
              },
            },
        },
    }
  }