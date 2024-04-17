import ls from 'localstorage-slim'
ls.config.encrypt = true


export const store = (key, data) => {
    ls.set(key, data)
}

export const getStore = (key) => {
    ls.get(key)
}