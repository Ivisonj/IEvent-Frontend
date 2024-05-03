'use client'
import * as React from 'react'
import { IMaskInput } from 'react-imask'
import { Box, InputLabel, TextField, OutlinedInput } from '@mui/material'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const DateMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function DateMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
      <IMaskInput
        {...other}
        mask="00/00/0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  },
)

const TimeMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TimeMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
      <IMaskInput
        {...other}
        mask="00:00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  },
)

const CreateEventForm = () => {
  const [dateValues, setDateValues] = React.useState({
    textmask: '01/01/2001',
  })

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValues({
      ...dateValues,
      [event.target.name]: event.target.value,
    })
  }

  const [timeValue, setTimeValue] = React.useState({
    textmask: '22:00',
  })

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeValue({
      ...timeValue,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Box component="form" autoComplete="off" width="100%">
      <Box mb={3}>
        <InputLabel htmlFor="company-name">Nome</InputLabel>
        <OutlinedInput
          fullWidth
          id="company-name"
          type="text"
          placeholder="Aniversário da Maria"
        />
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="time">Data</InputLabel>
        <TextField
          fullWidth
          id="time"
          value={dateValues.textmask}
          onChange={handleDateChange}
          name="textmask"
          InputProps={{
            inputComponent: DateMaskCustom as any,
          }}
        />
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="time">Hora</InputLabel>
        <TextField
          fullWidth
          id="time"
          value={timeValue.textmask}
          onChange={handleTimeChange}
          name="textmask"
          InputProps={{
            inputComponent: TimeMaskCustom as any,
          }}
        />
      </Box>
    </Box>
  )
}

export default CreateEventForm
