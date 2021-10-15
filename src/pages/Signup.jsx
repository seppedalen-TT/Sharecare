import { Grid, useMediaQuery, useTheme } from '@mui/material'
import BackgroundImage from '../assets/background.jpg'
import SignupForm from '../components/forms/SignupForm'
import SignupFormHeader from '../components/header/SignupFormHeader'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contentGrid: {
    padding: '0 20px'
  },
  backgroundImage: {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100%',
    minHeight: '375px',
    height: '100%',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      height: 'unset',
    },
  }
}))

const Signup = () => {
  const classes = useStyles()
  const theme = useTheme()
  const placeHeaderTop = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container >
      <Grid item xs={12} md={6}>
        {placeHeaderTop && <SignupFormHeader />}
        <div className={classes.backgroundImage} />
      </Grid>
      <Grid item xs={12} md={6} >
        <div className={classes.contentGrid}>
          {!placeHeaderTop && <SignupFormHeader />}
          <SignupForm />
        </div>
      </Grid>
    </Grid>
  )
}

export default Signup