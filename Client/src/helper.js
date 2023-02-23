import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"

export async function getUsers() {
    try {
        const response = await axios.get('/');
        const data = response.data;
        console.log(data.Items);
        return data.Items;
    } catch (error) {
        return Promise.reject({ error });
    }
}


export async function registerUser(credentials) {
    try {
        console.log(credentials);
        const response = await axios.post(`/`, credentials);
        const { msg } = response;
        return Promise.resolve(msg);
    } catch (error) {
        console.error(error);
        return Promise.reject({ error });
    }
}