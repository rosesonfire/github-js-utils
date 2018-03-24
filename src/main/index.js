import createDefensivePromise from './utils/createDefensivePromise'
import foldLeft from './utils/foldLeft'
import groupArrayItems from './utils/groupArrayItems'
import axiosWrapper from './wrappers/axiosWrapper'

export const utils = { createDefensivePromise, foldLeft, groupArrayItems }
export const wrappers = { axiosWrapper }
