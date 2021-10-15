
import { Controller } from "react-hook-form";
import { ButtonSelect, DatePicker, MaskedPrefixNumberInput } from './Common'
import { gender } from '../../constants/form'
import { checkAgeLimit } from '../../utils/common'

export const Phone = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      shouldUnregister
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <MaskedPrefixNumberInput
          prefix="+1"
          onChange={onChange}
          value={value}
          label="Phone number"
        />
      )}
    />
  )
}

export const DateOfBirth = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      shouldUnregister
      rules={{ required: true, validate: (v) => checkAgeLimit(v, 18) }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <DatePicker
          errorMessage={invalid && (!value ? "This field is required" : "Has to be 18 and above")}
          onChange={onChange}
          value={value}
          label="Date of birth"
        />
      )}
    />
  )
}

export const Gender = ({ control, accessKey }) => {
  return (
    <Controller
      name={accessKey}
      control={control}
      shouldUnregister
      rules={{ required: true }}
      render={({ field: { onChange, value }, fieldState: { invalid } }) => (
        <ButtonSelect
          errorMessage={invalid && "This field is required"}
          onChange={onChange}
          value={value}
          label="Gender"
          options={gender}
        />
      )}
    />
  )
}
