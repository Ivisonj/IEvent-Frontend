import { Button, useTheme } from '@mui/material'

interface TransparentButtonProps {
  children: string
  onClick?: () => void
}

const TransparentButton = ({ children, onClick }: TransparentButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        width: '40%',
        borderRadius: '20px',
        bgcolor: theme.palette.grey[100],
        color: theme.palette.common.black,
        opacity: '50%',
        '&:hover': {
          bgcolor: theme.palette.grey[300],
        },
      }}
    >
      {children}
    </Button>
  )
}

export default TransparentButton
