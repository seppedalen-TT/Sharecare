
import { Controller } from "react-hook-form";
import { TextField, Select } from './Common'
import { states } from '../../constants/form'

const streetRegex = /^[a-zA-Z0-9-./\s/]*$/
export const Street = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      rules={{
        required: true, validate: (v) => {
          return streetRegex.test(v)
        }
      }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <TextField
          errorMessage={invalid && (!value ? "This field is required" : "Can have the following chars(a-z, A-Z, space, ., -, 0-9)")}
          onChange={onChange}
          value={value}
          label="Street address"
        />
      )}
    />
  )
}

const cityRegex = /^[a-zA-Z/\s/]*$/
export const City = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      rules={{
        required: true, validate: (v) => {
          return cityRegex.test(v)
        }
      }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <TextField
          errorMessage={invalid && (!value ? "This field is required" : "Can have the following chars(a-z, A-Z, space)")}
          onChange={onChange}
          value={value}
          label="City"
        />
      )}
    />
  )
}

export const State = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <Select
          options={states}
          errorMessage={invalid && "This field is required"}
          onChange={onChange}
          value={value}
          label="State / Province"
        />
      )}
    />
  )
}

const zipRegex = /^[0-9]*$/
export const Zip = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      rules={{
        required: true, validate: (v) => {
          return zipRegex.test(v)
        }
      }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <TextField
          errorMessage={invalid && (!value ? "This field is required" : "Can have the following chars(0-9)")}
          onChange={onChange}
          value={value}
          label="Zip / Postal"
        />
      )}
    />
  )
}
