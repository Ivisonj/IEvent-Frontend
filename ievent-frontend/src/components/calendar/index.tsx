'use client'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'

import CalendarCard from './calendarCard'

const Calendar = () => {
  const week = [
    {
      id: '1',
      dayWeek: 'Dom',
      day: '21',
    },
    {
      id: '2',
      dayWeek: 'Seg',
      day: '22',
    },
    {
      id: '3',
      dayWeek: 'Ter',
      day: '23',
    },
    {
      id: '4',
      dayWeek: 'Qua',
      day: '24',
    },
    {
      id: '5',
      dayWeek: 'Qui',
      day: '25',
    },
    {
      id: '6',
      dayWeek: 'Sex',
      day: '26',
    },
    {
      id: '7',
      dayWeek: 'Sab',
      day: '27',
    },
  ]

  return (
    <Box>
      <Typography variant="h6">Seg, 25 de Abril, 2024</Typography>
      <Box display="flex" width="100%" py={1}>
        {week.map((item: any) => (
          <CalendarCard
            key={item.id}
            dayWeek={item.dayWeek}
            day={parseInt(item.day)}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Calendar
