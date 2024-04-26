import { Card, Stack, Typography, useTheme } from '@mui/material'

interface CalendarCardProps {
  dayWeek: string
  day: number
}

const CalendarCard = ({ dayWeek, day }: CalendarCardProps) => {
  const theme = useTheme()
  const date = new Date()
  const currentDay = date.getUTCDate()

  return (
    <Card
      variant="outlined"
      sx={{
        margin: '1px',
        width: 50,
        height: 80,
        borderRadius: 4,
        border: `solid 1px ${theme.palette.primary.main}`,
        color:
          day === currentDay
            ? theme.palette.primary.contrastText
            : theme.palette.common.black,
        backgroundColor:
          day === currentDay
            ? theme.palette.primary.main
            : theme.palette.grey[200],
        cursor: 'pointer',
      }}
    >
      <Stack
        height="35%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom={
          day === currentDay
            ? `solid 1px ${theme.palette.divider}`
            : `solid 1px ${theme.palette.primary.main}`
        }
      >
        <Typography variant="h6">{dayWeek}</Typography>
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
