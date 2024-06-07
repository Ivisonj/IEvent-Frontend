'use client'
import * as React from 'react'
import { IMaskInput } from 'react-imask'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import {
  Box,
  InputLabel,
  TextField,
  OutlinedInput,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
  FormHelperText,
} from '@mui/material'

import IButton from '@/components/Ibutton'
import { TranslateLabel } from '@/utils/translateLabel'

const date = new Date()
date.setDate(date.getDate() - 1)
const dd = date.getDate()
const mm = date.getMonth() + 1
const yyyy = date.getFullYear()
const yesterdayDate = `${yyyy}-${mm}-${dd}`

const createEventFormSchema = z.object({
  name: z.string().nonempty('Campo obrigatório'),
  publicEvent: z.enum(['yes', 'no']),
  once: z.enum(['yes', 'no']),
  eventPeriod: z.enum(['daily', 'mon/fri', 'sat/sun', 'fri/sun', 'custom']),
  daysOptions: z.object({
    monday: z.boolean(),
    tuesday: z.boolean(),
    wednesday: z.boolean(),
    thursday: z.boolean(),
    friday: z.boolean(),
    saturday: z.boolean(),
  }),
  date: z.coerce
    .date()
    .min(new Date(yesterdayDate), { message: 'Data inválida' }),
  start_time: z.string().refine(
    (value) => {
      const [hours, minutes] = value.split(':').map(Number)
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
    },
    {
      message: 'Hora inválida',
      path: ['start_time'],
    },
  ),
  end_time: z.string().refine(
    (value) => {
      const [hours, minutes] = value.split(':').map(Number)
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
    },
    {
      message: 'Hora inválida',
      path: ['end_time'],
    },
  ),
})

type createEventFormData = z.infer<typeof createEventFormSchema>

const CreateEventForm = () => {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<createEventFormData>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      name: '',
      publicEvent: 'yes',
      once: 'yes',
      eventPeriod: 'daily',
      daysOptions: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
      },
    },
    mode: 'onChange',
  })

  const sendFormData = (data: createEventFormData) => {
    console.log(data)
  }

  return (
    <Box
      onSubmit={handleSubmit(sendFormData)}
      component="form"
      autoComplete="off"
      width="100%"
    >
      <Box mb={2}>
        <InputLabel htmlFor="company-name">Nome</InputLabel>
        <OutlinedInput
          fullWidth
          {...register('name')}
          id="company-name"
          type="text"
          placeholder="ex: Reunião Administrativa"
          error={Boolean(errors.name)}
        />
        {errors.name && (
          <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
      </Box>
      <Box mb={2}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            O seu evento será público?
          </FormLabel>
          <Controller
            control={control}
            name="publicEvent"
            defaultValue="yes"
            render={({ field }) => (
              <RadioGroup
                {...field}
                row
                aria-labelledby="demo-radio-buttons-group-label"
              >
                <FormControlLabel
                  value={'yes'}
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value={'no'}
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
      </Box>
      <Box mb={2}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            O seu evento acontecerá em dia único?
          </FormLabel>
          <Controller
            control={control}
            name="once"
            defaultValue="yes"
            render={({ field }) => (
              <RadioGroup
                {...field}
                row
                aria-labelledby="demo-radio-buttons-group-label"
              >
                <FormControlLabel
                  value={'yes'}
                  control={<Radio />}
                  label="Sim"
                />
                <FormControlLabel
                  value={'no'}
                  control={<Radio />}
                  label="Não"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
      </Box>
      {watch('once') === 'no' ? (
        <Box mb={2}>
          <FormControl>
            <Controller
              control={control}
              name="eventPeriod"
              defaultValue="daily"
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  aria-labelledby="demo-radio-buttons-group-label"
                >
                  <FormControlLabel
                    value={'daily'}
                    control={<Radio />}
                    label="Diariamente"
                  />
                  <FormControlLabel
                    value={'mon/fri'}
                    control={<Radio />}
                    label="Seg a Sex"
                  />
                  <FormControlLabel
                    value={'fri/sun'}
                    control={<Radio />}
                    label="Sex a Dom"
                  />
                  <FormControlLabel
                    value={'sat/sun'}
                    control={<Radio />}
                    label="Sab e Dom"
                  />
                  <FormControlLabel
                    value={'custom'}
                    control={<Radio />}
                    label="Personalizado"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Box>
      ) : (
        ''
      )}
      {watch('eventPeriod') === 'custom' && watch('once') === 'no' && (
        <Box mb={2}>
          <FormControl>
            <Controller
              control={control}
              name="daysOptions"
              render={({ field }) => (
                <FormGroup>
                  {Object.entries(field.value).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          checked={value}
                          onChange={(e) => {
                            const updatedValue = {
                              ...field.value,
                              [key]: e.target.checked,
                            }
                            field.onChange(updatedValue)
                          }}
                        />
                      }
                      label={TranslateLabel(key)}
                    />
                  ))}
                </FormGroup>
              )}
            />
          </FormControl>
        </Box>
      )}
      <Box mb={3}>
        <InputLabel htmlFor="date">Data</InputLabel>
        <TextField
          {...register('date')}
          fullWidth
          id="date"
          type="date"
          name="date"
          error={Boolean(errors.date)}
        />
        {errors.date && (
          <FormHelperText error>{errors.date.message}</FormHelperText>
        )}
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="start_time">Horário de Início</InputLabel>
        <TextField
          {...register('start_time')}
          fullWidth
          id="start_time"
          type="time"
          name="start_time"
        />
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="end_time">Horário de Fim</InputLabel>
        <TextField
          {...register('end_time')}
          fullWidth
          id="end_time"
          type="time"
          name="end_time"
        />
      </Box>
      <Box>
        <IButton type="submit">Criar Evento</IButton>
      </Box>
    </Box>
  )
}

export default CreateEventForm
