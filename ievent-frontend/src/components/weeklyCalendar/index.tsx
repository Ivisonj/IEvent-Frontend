'use client'
import { useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import CalendarCard from './calendarCard'

const monthNames = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nev',
  'Dez',
]
const weekNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

const WeeklyCalendar = () => {
  const date = new Date()
  const currentDay = date.getUTCDate()
  const year = date.getFullYear()
  const month = date.getMonth()
  const monthName = monthNames[month]

  const getDaysData = () => {
    const daysData = []

    for (let i = 0; i < 7; i++) {
      const next = new Date(date.getTime())
      next.setDate(date.getDate() - date.getDay() + i)

      const weekDay = weekNames[next.getDay()]
      const day = next.getDate()

      daysData.push({ weekDay, day })
    }

    return daysData
  }

  const [selectedDay, setSelectedDay] = useState<number>(currentDay)

  const handleDayClick = (day: number) => {
    setSelectedDay(day)
  }

  return (
    <Box display="column">
      <Box mb={1}>
        <Typography variant="h6">{`${currentDay} de ${monthName} de ${year}`}</Typography>
      </Box>
      <Stack direction="row" spacing={1}>
        {getDaysData().map((dayData, index) => (
          <CalendarCard
            key={index}
            weekDay={dayData.weekDay}
            day={dayData.day}
            isSelected={dayData.day === selectedDay}
            onClick={() => handleDayClick(dayData.day)}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default WeeklyCalendar
