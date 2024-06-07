'use client'
import * as React from 'react'
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
  isPublic: z.enum(['yes', 'no']),
  isUniqueDay: z.enum(['yes', 'no']),
  eventPeriod: z.enum(['daily', 'mon/fri', 'sat/sun', 'fri/sun', 'custom']),
  days: z.object({
    monday: z.boolean(),
    tuesday: z.boolean(),
    wednesday: z.boolean(),
    thursday: z.boolean(),
    friday: z.boolean(),
    saturday: z.boolean(),
  }),
  startDate: z.coerce
    .date()
    .min(new Date(yesterdayDate), { message: 'Data inválida' }),
  endDate: z.coerce
    .date()
    .min(new Date(yesterdayDate), { message: 'Data inválida' }),
  startTime: z.string().refine(
    (value) => {
      const [hours, minutes] = value.split(':').map(Number)
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
    },
    {
      message: 'Hora inválida',
      path: ['startTime'],
    },
  ),
  endTime: z.string().refine(
    (value) => {
      const [hours, minutes] = value.split(':').map(Number)
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
    },
    {
      message: 'Hora inválida',
      path: ['endTime'],
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
  } = useForm<createEventFormData>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      name: '',
      isPublic: 'yes',
      isUniqueDay: 'yes',
      eventPeriod: 'daily',
      days: {
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
            name="isPublic"
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
            name="isUniqueDay"
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
      {watch('isUniqueDay') === 'no' ? (
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
      {watch('eventPeriod') === 'custom' && watch('isUniqueDay') === 'no' && (
        <Box mb={2}>
          <FormControl>
            <Controller
              control={control}
              name="days"
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
        <InputLabel htmlFor="startDate">Data de Início</InputLabel>
        <TextField
          {...register('startDate')}
          fullWidth
          id="startDate"
          type="date"
          name="startDate"
          error={Boolean(errors.startDate)}
        />
        {errors.startDate && (
          <FormHelperText error>{errors.startDate.message}</FormHelperText>
        )}
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="endDate">Data de Fim</InputLabel>
        <TextField
          {...register('endDate')}
          fullWidth
          id="endDate"
          type="date"
          name="endDate"
          error={Boolean(errors.endDate)}
        />
        {errors.endDate && (
          <FormHelperText error>{errors.endDate.message}</FormHelperText>
        )}
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="startTime">Horário de Início</InputLabel>
        <TextField
          {...register('startTime')}
          fullWidth
          id="startTime"
          type="time"
          name="startTime"
        />
      </Box>
      <Box mb={3}>
        <InputLabel htmlFor="endTime">Horário de Fim</InputLabel>
        <TextField
          {...register('endTime')}
          fullWidth
          id="endTime"
          type="time"
          name="endTime"
        />
      </Box>
      <Box>
        <IButton type="submit">Criar Evento</IButton>
      </Box>
    </Box>
  )
}

export default CreateEventForm
