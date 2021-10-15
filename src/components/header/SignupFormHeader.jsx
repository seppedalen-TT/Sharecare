import React from 'react'
import logo from '../../assets/logo.svg'
import Grid from '@mui/material/Grid'
import makeStyles from '@mui/styles/makeStyles'
import Button from '@mui/material/Button'

const useStyles = makeStyles(() => ({
  main: {
    margin: '15px',
    width: '100%'
  },
  buttonGrid: {
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '30px'
  }
}))

const SignupFormHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Grid container >
        <Grid item xs={6}>
          <img src={logo} width="200px" alt="Sharecare logo" />
        </Grid>
        <Grid item xs={6} className={classes.buttonGrid}>
          <Button variant='outlined' size='small'>
            How it works
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignupFormHeader