
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