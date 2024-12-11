import axios from "axios";


export const API_SERVER_HOST = 'https://port-0-simple-boarad-m4j5hbxu19c10750.sel4.cloudtype.app'

const prefix = `${API_SERVER_HOST}/api/post`

export const register = async (postDTO) => {
    try {
        // 비동기 POST 요청
        let res = await axios.post(prefix + '/register', postDTO);
        return res;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export const getAll = async (groupName) => {
    try {
        // 비동기 Get 요청
        let res = await axios.get(`${prefix}/?groupName=${groupName}`);
        return res;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export const remove = async (id) => {

    try {
        let res = await axios.delete(`${prefix}/${id}`);
        return res;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}