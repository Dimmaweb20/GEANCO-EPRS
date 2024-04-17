import ls from 'localstorage-slim'


export const ClinicProtectedRoutes = () => {
    const clinic = ls.get('activeclinic')
    return clinic ? true : false
}