
import { Controller } from "react-hook-form";
import { TextField } from './Common'
import { validateEmail } from '../../utils/common'

const nameRegex = /^[a-zA-Z-'.]*$/
export const FirstName = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      shouldUnregister
      rules={{
        required: true, validate: (v) => {
          return nameRegex.test(v)
        }
      }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <TextField
          errorMessage={invalid && (!value ? "This field is required" : "Name can be only have the following chars(a-z, A-Z, - ',.)")}
          onChange={onChange}
          value={value}
          label="First name"
        />
      )}
    />
  )
}

export const LastName = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      shouldUnregister
      rules={{
        required: true, validate: (v) => {
          return nameRegex.test(v)
        }
      }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <TextField
          errorMessage={invalid && (!value ? "This field is required" : "Name can be only have the following chars(a-z, A-Z, - ',.)")}
          onChange={onChange}
          value={value}
          label="Last name"
        />
      )}
    />
  )
}


export const Email = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      shouldUnregister
      rules={{ required: true, validate: (v) => validateEmail(v) }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <TextField
          errorMessage={invalid && (!value ? "This field is required" : "Must be a valid email address")}
          onChange={onChange}
          value={value}
          label="Email address"
        />
      )}
    />
  )
}
