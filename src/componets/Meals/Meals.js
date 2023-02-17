import React, { Fragment } from 'react'
import AvailibleMeals from './AvailibleMeals'
import MealsSummary from './MealsSummary'

export default function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailibleMeals/>
    </Fragment>
  )
}
