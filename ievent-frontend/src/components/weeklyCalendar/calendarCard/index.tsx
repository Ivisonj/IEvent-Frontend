import { Card, Stack, Typography, useTheme } from '@mui/material'

interface CalendarCardProps {
  weekDay: string
  day: number
  isSelected: boolean
  onClick: () => void
}

const CalendarCard = ({
  weekDay,
  day,
  isSelected,
  onClick,
}: CalendarCardProps) => {
  const theme = useTheme()

  return (
    <Card
      onClick={onClick}
      variant="outlined"
      sx={{
        margin: '1px',
        width: 50,
        height: 80,
        borderRadius: 4,
        border: `solid 1px ${theme.palette.primary.main}`,
        color: isSelected
          ? theme.palette.primary.contrastText
          : theme.palette.common.black,
        backgroundColor: isSelected ? theme.palette.primary.main : 'inherit',
        '&:hover': {
          bgcolor: isSelected
            ? theme.palette.primary.main
            : theme.palette.grey[200],
        },
        cursor: 'pointer',
      }}
    >
      <Stack
        height="35%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom={
          isSelected
            ? `solid 1px ${theme.palette.divider}`
            : `solid 1px ${theme.palette.primary.main}`
        }
      >
        <Typography variant="h6">{weekDay}</Typography>
      </Stack>
      <Stack
        height="65%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3">{day}</Typography>
      </Stack>
    </Card>
  )
}

export default CalendarCard
