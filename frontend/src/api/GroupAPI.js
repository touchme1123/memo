import axios from "axios";
import {API_SERVER_HOST} from "./postAPI";

const prefix = `${API_SERVER_HOST}/api/group`

export const register = async (groupDTO) => {
    try {
        // 비동기 POST 요청
        const response = await axios.post(prefix + '/register', groupDTO);
        return response;  // 성공적으로 응답받으면 그 응답 반환
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;  // 오류 발생 시 다시 throw
    }
};

export const getAll = async () => {
    try {
        const res = await axios.get(prefix + '/');
        return res;
    } catch (error) {
        console.error("Error during getList of list:", error);
        throw error;
    }
}