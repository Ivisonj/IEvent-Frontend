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
})

type createEventFormData = z.infer<typeof createEventFormSchema>

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
    textmask: '00:00',
  })

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeValue({
      ...timeValue,
      [event.target.name]: event.target.value,
    })
  }

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
      {watch('once') === 'yes' ? (
        <Box mb={3}>
          <InputLabel htmlFor="date">Data</InputLabel>
          <TextField
            fullWidth
            id="date"
            value={dateValues.textmask}
            onChange={handleDateChange}
            name="textmask"
            InputProps={{
              inputComponent: DateMaskCustom as any,
            }}
          />
        </Box>
      ) : (
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
      )}
      {watch('eventPeriod') === 'custom' && (
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
      <Box>
        <IButton type="submit">Criar Evento</IButton>
      </Box>
    </Box>
  )
}

export default CreateEventForm

{
  /* <Box mb={2}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            O seu evento acontecerá em dia único?{' '}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="yes"
            name="radio-buttons-group"
            onChange={handleRadioChange}
            value={isUniqueDate}
          >
            <FormControlLabel value={'yes'} control={<Radio />} label="Sim" />
            <FormControlLabel value={'no'} control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
      </Box>
      {isUniqueDate === 'yes' ? (
        <Box mb={3}>
          <InputLabel htmlFor="date">Data</InputLabel>
          <TextField
            fullWidth
            id="date"
            value={dateValues.textmask}
            onChange={handleDateChange}
            name="textmask"
            InputProps={{
              inputComponent: DateMaskCustom as any,
            }}
          />
        </Box>
      ) : (
        <Box mb={2}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleEventPeriodChange}
              value={eventPeriod}
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
          </FormControl>
        </Box>
      )}
      {eventPeriod === 'custom' && isUniqueDate === 'no' && (
        <Box mb={2}>
          <FormControl>
            <FormGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleDaysOptionsChange}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={daysOptions.monday}
                    onChange={handleDaysOptionsChange}
                    name="monday"
                  />
                }
                label="Segunda-feira"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={daysOptions.tuesday}
                    onChange={handleDaysOptionsChange}
                    name="tuesday"
                  />
                }
                label="Terça-feira"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={daysOptions.wednesday}
                    onChange={handleDaysOptionsChange}
                    name="wednesday"
                  />
                }
                label="Quarta-feira"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={daysOptions.thursday}
                    onChange={handleDaysOptionsChange}
                    name="thursday"
                  />
                }
                label="Quinta-feira"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={daysOptions.friday}
                    onChange={handleDaysOptionsChange}
                    name="friday"
                  />
                }
                label="Sexta-feira"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={daysOptions.saturday}
                    onChange={handleDaysOptionsChange}
                    name="saturday"
                  />
                }
                label="Sábado"
              />
            </FormGroup>
          </FormControl>
        </Box>
      )}
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
      </Box> */
}
