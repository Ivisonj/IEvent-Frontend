import { ReactNode } from 'react'
import { Card, useTheme } from '@mui/material'

interface MainCardProps {
  children: ReactNode
  width?: string
  p?: string
  m?: string
  ml?: string
  mt?: string
  mr?: string
  mb?: string
  borderRadius?: string
  bgColor?: string
  color?: string
  onClick?: () => void
}

const MainCard = ({
  children,
  width,
  p,
  m,
  ml,
  mt,
  mr,
  mb,
  borderRadius,
  bgColor,
  color,
  onClick,
}: MainCardProps) => {
  const theme = useTheme()
  return (
    <Card
      onClick={onClick}
      variant="outlined"
      sx={{
        width: `${width || '398px'}`,
        height: 'auto',
        p: `${p || '16px'}`,
        m: m,
        ml: ml,
        mt: mt,
        mr: mr,
        mb: mb,
        borderRadius: `${borderRadius || '20px'}`,
        backgroundColor: `${bgColor || theme.palette.primary.main}`,
        color: `${color || theme.palette.primary.contrastText}`,
        cursor: 'pointer',
      }}
    >
      {children}
    </Card>
  )
}

export default MainCard
