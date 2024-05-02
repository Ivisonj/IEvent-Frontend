import { useTheme } from '@mui/material'
import { Button } from '@mui/material'

interface IButtonProps {
  children: string
  type: 'button' | 'submit'
  bgColor?: string
  hover?: string
  width?: string
  height?: string
  m?: number
  color?: string
  my?: string
  mx?: string
  borderRadius?: string
  onClick?: () => void
}

const IButton = ({
  children,
  type,
  bgColor,
  hover,
  width,
  height,
  m,
  color,
  my,
  mx,
  borderRadius,
  onClick,
}: IButtonProps) => {
  const theme = useTheme()

  return (
    <Button
      type={type}
      onClick={onClick}
      variant="contained"
      sx={{
        borderRadius: `${borderRadius || '20px'}`,
        width: `${width || '100%'}`,
        height: `${height || '2.6rem'}`,
        backgroundColor: `${bgColor || theme.palette.primary.main}`,
        ':hover': { backgroundColor: `${hover}` },
        textTransform: 'none',
        m: m,
        color: color,
        my: my,
        mx: mx,
      }}
    >
      {children}
    </Button>
  )
}

export default IButton
