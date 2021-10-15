import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {
  FirstName, LastName, Email
} from '../textfields/General'
import { Street, Zip, City, State } from '../textfields/Address'
import { DateOfBirth, Phone, Gender } from '../textfields/Contact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { makeStyles } from "@mui/styles";

const FormStyles = makeStyles((theme) => ({
  formRoot: {
    width: '300px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    marginBottom: '20px'
  },
  title: {
    margin: '1rem 0'
  },
  buttonDiv: {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const formFields = [
  {
    width: 6,
    component: (props) => <FirstName {...props} />,
    key: 'firstName'
  },
  {
    width: 6,
    component: (props) => <LastName {...props} />,
    key: 'lastName'
  },
  {
    width: 12,
    component: (props) => <Email {...props} />,
    key: 'email'
  },
  {
    width: 12,
    component: (props) => <Street {...props} />,
    key: 'street'
  },
  {
    width: 6,
    component: (props) => <City {...props} />,
    key: 'city'
  },
  {
    width: 6,
    component: (props) => <State {...props} />,
    key: 'state'
  },
  {
    width: 12,
    component: (props) => <Zip {...props} />,
    key: 'zip'
  },
  {
    width: 12,
    component: (props) => <Phone {...props} />,
    key: 'phone'
  },
  {
    width: 12,
    component: (props) => <DateOfBirth {...props} />,
    key: 'dateOfBirth'
  },
  {
    width: 12,
    component: (props) => <Gender {...props} />,
    key: 'gender'
  }
]

const defaultSignupFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  zip: '',
  city: '',
  state: '',
  phone: '',
  dateOfBirth: null,
  gender: ''
}

const SignupForm = () => {
  const classes = FormStyles()
  const { handleSubmit, control } = useForm({
    defaultValues: defaultSignupFormValues
  })

  const onSubmit = useCallback(data => {
    console.log(data)
  }, []);

  return (
    <div className={classes.formRoot}>
      <h1 align='center' >
        Welcome</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={1}>
          {
            formFields.map(field => (
              <Grid key={field.key} item xs={field.width}>
                {
                  field.component({
                    control,
                    accessKey: field.key
                  })
                }
              </Grid>
            ))
          }
        </Grid>
        <div className={classes.buttonDiv}>
          <Button fullWidth variant='contained' type='submit' color='primary'>
            Get my free samples
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm