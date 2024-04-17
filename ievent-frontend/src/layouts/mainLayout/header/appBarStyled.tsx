import { useTheme, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'

const AppBarStyled = styled(AppBar)(() => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  return {
    position: matchDownMd ? 'fixed' : 'relative',
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'none',
    backgroundColor: theme.palette.common.white,
  }
})

export default AppBarStyled
