import * as yup from 'yup'
import { IntlShape } from 'react-intl'

export const reviewFormInitialValues = {
  title: '',
  reviewContent: '',
  name: '',
  ratingSelected: 0,
}

export const reviewsFormSchema = (deps: { intl: IntlShape }) => {
  return yup.object().shape({
    title: yup.string().required('Required'),

    reviewContent: yup.string().required('Required'),

    name: yup.string().required('Required'),

    ratingSelected: yup.number().required('Required'),
  })
}
