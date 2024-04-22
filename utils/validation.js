import ls from 'localstorage-slim'
import { clearStore } from './storage'

export const ClinicProtectedRoutes = () => {
    const clinic = ls.get('activeclinic')
    return clinic ? true : false
}

export const logoutSession = (page) => {
    clearStore()
}