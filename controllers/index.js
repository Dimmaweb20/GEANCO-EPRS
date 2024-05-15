
const BASE_URL = "http://localhost:3000/api/"

export const createClinic = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}clinics`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getClinicData = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}clinics`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateClinic = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}clinics`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteClinic = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}clinics`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}





export const createAntenatal = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}antenatal`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getAntenatalData = async () => {
    try {
        const res = await fetch(`${BASE_URL}antenatal`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const getAntenatalDataByClinic = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}antenatal/${id}`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateAntenatal = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}antenatal`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteAntenatal = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}antenatal`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}


export const createDoctors = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}doctors`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getDoctorsData = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}doctors`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateDoctors = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}doctors`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteDoctors = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}doctors`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}


export const createChildimmunization = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}childimmunization`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getChildimmunizationData = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}childimmunization`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateChildimmunization = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}childimmunization`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteChildimmunization = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}childimmunization`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}




export const createGopd = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}gopd`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getGopdData = async () => {
    try {
        const res = await fetch(`${BASE_URL}gopd`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateGopd = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}gopd`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteGopd = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}gopd`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}




export const createLaparoscopic = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}laparoscopic`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getLaparoscopicData = async () => {
    try {
        const res = await fetch(`${BASE_URL}laparoscopic`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateLaparoscopic = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}laparoscopic`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteLaparoscopic = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}laparoscopic`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}




export const createFamilyplanning = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}familyplanning`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getFamilyplanningData = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}familyplanning`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateFamilyplanning = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}familyplanning`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteFamilyplanning = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}familyplanning`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}




export const createOnlineapplication = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}onlineapplication`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getOnlineapplicationData = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}onlineapplication`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateOnlineapplication = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}onlineapplication`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteOnlineapplication = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}onlineapplication`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}




export const createPatient = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}patients`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getPatientData = async () => {
    try {
        const res = await fetch(`${BASE_URL}patients`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const getSinglePatientData = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}patients/${id}`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const getPatientDataByClinic = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}patients/${id}`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const getPatientDataById = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}patientbyid/${id}`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updatePatient = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}patients`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deletePatient = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}patients`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const createSurgery = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}surgery`, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getSurgeryData = async () => {
    try {
        const res = await fetch(`${BASE_URL}surgery`)
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateSurgery = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}surgery`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const deleteSurgery = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}surgery`, {
            method: 'DELETE',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const clinicLogin = async (data) => {
    try {
        const res = await fetch(`${BASE_URL}clinics/${data.email}`)
        return res.json()
    } catch (error) {
        return error;
    }
}
