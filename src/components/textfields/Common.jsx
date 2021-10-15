import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import MUITextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MUISelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Stack from '@mui/material/Stack'
import { IMaskInput } from 'react-imask'
import OutlinedInput from '@mui/material/OutlinedInput'

const LabelStyles = makeStyles(() => ({
  labelRoot: {
    fontSize: '16px',
    color: 'grey',
    marginBottom: '3px'
  }
}))

export const Label = ({ children }) => {
  const classes = LabelStyles()
  return (
    <Typography className={classes.labelRoot}>
      {children}
    </Typography>
  )
}

const ErrorStyles = makeStyles(() => ({
  errorRoot: {
    marginLeft: '0px !important'
  }
}))

export const ErrorDisplay = ({ children }) => {
  const classes = ErrorStyles()

  return <FormHelperText className={classes.errorRoot} error >{children}</FormHelperText>
}

export const TextField = ({ label, errorMessage, onChange, value }) => {

  return (
    <FormControl fullWidth>
      <Label>{label} </Label>
      <MUITextField
        variant="outlined"
        size='small'
        onChange={onChange}
        value={value}
      />

      <ErrorDisplay >{errorMessage}</ErrorDisplay>
    </FormControl>
  )
}

export const Select = ({ label, errorMessage, options, onChange, value }) => {

  return (
    <FormControl
      size='small'
      fullWidth
    >
      <Label>{label} </Label>
      <MUISelect
        value={value}
        onChange={onChange}
        variant='outlined'
      >
        {
          options.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))
        }
      </MUISelect>
      <ErrorDisplay >{errorMessage}</ErrorDisplay>
    </FormControl>
  )
}


export const TextFieldPrefix = ({ label, errorMessage, onChange, value, prefix }) => {

  return (
    <FormControl
      size='small'
      fullWidth
    >
      <Label>{label} </Label>
      <MUITextField
        value={value}
        onChange={onChange}
        variant='outlined'
        InputProps={{
          startAdornment: <InputAdornment position="start">{prefix}</InputAdornment>,
        }}
        size='small'
      />
      <ErrorDisplay >{errorMessage}</ErrorDisplay>
    </FormControl>
  )
}

const MakesValue = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
      variant='outlined'

    />
  )
})

export const MaskedPrefixNumberInput = ({ label, errorMessage, onChange, value, prefix }) => {
  return (
    <FormControl
      size='small'
      fullWidth
      variant='outlined'
    >
      <Label>{label} </Label>
      <OutlinedInput
        value={value}
        variant='outlined'
        startAdornment={<InputAdornment position="start">{prefix}</InputAdornment>}
        name="textmask"
        id="formatted-text-mask-input"
        inputComponent={MakesValue}
        onChange={onChange}
      />
      <ErrorDisplay >{errorMessage}</ErrorDisplay>
    </FormControl>
  )
}

export const DatePicker = ({ label, errorMessage, onChange, value }) => {

  return (
    <FormControl
      size='small'
      fullWidth
    >
      <Label>{label}</Label>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => <MUITextField fullWidth size='small' variant='outlined' {...params} />}
        />
      </LocalizationProvider>
      <ErrorDisplay >{errorMessage}</ErrorDisplay>
    </FormControl>
  )
}

export const ButtonSelect = ({ label, errorMessage, onChange, value, options }) => {

  return (
    <FormControl
      size='small'
      fullWidth
    >
      <Label>{label}</Label>
      <Stack direction="row" spacing={2}>
        {
          options.map(option => (
            <Button key={option.value} variant={option.value === value ? 'contained' : 'outlined'} color='primary' value={option.value} onClick={(e) => {
              e.target.value = option.value
              onChange(e)
            }}>{option.label}</Button>
          ))
        }
      </Stack>
      <ErrorDisplay >{errorMessage}</ErrorDisplay>
    </FormControl>
  )
}