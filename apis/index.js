
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

export const getClinicData = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/clinics')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateClinic = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/clinics', {
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
        const res = await fetch('http://localhost:3000/api/clinics', {
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
        const res = await fetch('http://localhost:3000/api/antenatal', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getAntenatalData = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/antenatal')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateAntenatal = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/antenatal', {
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
        const res = await fetch('http://localhost:3000/api/antenatal', {
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
        const res = await fetch('http://localhost:3000/api/doctors', {
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
        const res = await fetch('http://localhost:3000/api/doctors')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateDoctors = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/doctors', {
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
        const res = await fetch('http://localhost:3000/api/doctors', {
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
        const res = await fetch('http://localhost:3000/api/childimmunization', {
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
        const res = await fetch('http://localhost:3000/api/childimmunization')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateChildimmunization = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/chidimmunization', {
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
        const res = await fetch('http://localhost:3000/api/childimmunization', {
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
        const res = await fetch('http://localhost:3000/api/gopd', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getGopdData = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/gopd')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateGopd = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/gopd', {
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
        const res = await fetch('http://localhost:3000/api/gopd', {
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
        const res = await fetch('http://localhost:3000/api/laparoscopic', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getLaparoscopicData = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/laparoscopic')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateLaparoscopic = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/laparoscopic', {
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
        const res = await fetch('http://localhost:3000/api/laparoscopic', {
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
        const res = await fetch('http://localhost:3000/api/familyplanning', {
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
        const res = await fetch('http://localhost:3000/api/familyplanning')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateFamilyplanning = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/familyplanning', {
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
        const res = await fetch('http://localhost:3000/api/familyplanning', {
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
        const res = await fetch('http://localhost:3000/api/onlineapplication', {
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
        const res = await fetch('http://localhost:3000/api/onlineapplication')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateOnlineapplication = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/onlineapplication', {
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
        const res = await fetch('http://localhost:3000/api/onlineapplication', {
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
        const res = await fetch('http://localhost:3000/api/patients', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getPatientData = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/patients')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updatePatient = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/patients', {
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
        const res = await fetch('http://localhost:3000/api/patients', {
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
        const res = await fetch('http://localhost:3000/api/surgery', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        return res.json()
    } catch (error) {
        return error;
    }
}

export const getSurgeryData = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/surgery')
        return res.json()
    } catch (error) {
        return error;
    }
}

export const updateSurgery = async (data) => {
    try {
        const res = await fetch('http://localhost:3000/api/surgery', {
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
        const res = await fetch('http://localhost:3000/api/surgery', {
            method: 'DELETE',
            body: JSON.stringify(data)
        })
        
        return res.json()
    } catch (error) {
        return error;
    }
}


