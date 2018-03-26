import createDefensivePromise from './utils/createDefensivePromise'
import foldLeft from './utils/foldLeft'
import groupArrayItems from './utils/groupArrayItems'
import iocHelper from './utils/iocHelper'
import axiosWrapper from './wrappers/axiosWrapper'

export const utils =
  { createDefensivePromise, foldLeft, groupArrayItems, iocHelper }
export const wrappers = { axiosWrapper }
