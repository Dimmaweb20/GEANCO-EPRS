
const BASE_URL = "http://localhost:3000/api/"

export const createClinic = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/clinics', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}


export const createAntenatal = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/antenatal', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createDoctors = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/doctors', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createChildimmunization = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/childimmunization', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createGopd = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/gopd', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createLaparoscopic = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/laparoscopic', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createFamilyplanning = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/familyplanning', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createOnlineapplication = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/onlineapplication', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createPatients = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/patients', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createSurgery = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/surgery', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}