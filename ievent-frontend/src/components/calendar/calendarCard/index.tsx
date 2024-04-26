import { Card, Stack, Typography, useTheme } from '@mui/material'

interface CalendarCardProps {
  dayWeek: string
  day: number
}

const CalendarCard = ({ dayWeek, day }: CalendarCardProps) => {
  const theme = useTheme()

  return (
    <Card
      variant="outlined"
      sx={{
        margin: '1px',
        width: 50,
        height: 80,
        borderRadius: 4,
        border: `solid 1px ${theme.palette.primary.main}`,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
      }}
    >
      <Stack
        height="35%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom={`solid 1px ${theme.palette.divider}`}
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
