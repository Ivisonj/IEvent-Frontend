import { ReactNode } from 'react'
import { Card, useTheme } from '@mui/material'

interface MainCardProps {
  children: ReactNode
  width?: string
  p?: string
  borderRadius?: string
  bgColor?: string
  color?: string
  onClick?: () => void
}

const MainCard = ({
  children,
  width,
  p,
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
        width: `${width || 398}`,
        height: 'auto',
        p: `${p || '16px'}`,
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
