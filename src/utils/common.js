import sub from 'date-fns/sub'

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkAgeLimit(date, ageLimit = 18) {
  if (!date) return false
  return new Date(date) < new Date(sub(new Date(), {
    years: ageLimit
  }))
}