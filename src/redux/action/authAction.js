import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../../tools/constants";
import {UPDATESTATE} from "../type/authType";
import {toast} from "react-toastify";

export function updateState(state) {
    return {
        type: UPDATESTATE,
        payload: state
    }
}

export const login = (values) => (dispatch) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "auth/login", values)
        .then(async res => {
            if (res.data.accessToken) {
                await localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                axios.get(API_PATH + "user/me", {
                    headers: {
                        "Authorization": res.data.tokenType + " " + res.data.accessToken
                    }
                })
                    .then((res) => {
                        const role = res.data.roles;
                        role.filter(item => item.name === "ROLE_DIRECTOR").length > 0 ?
                            window.location.href = "/admin/dashboard" :
                            window.location.href = "/admin/store"
                    })
            }
        })
        .catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}

export const register = (e, v) => (dispatch) => {
    dispatch(updateState({isLoading: true}))
    axios.post(API_PATH + "auth/register", v)
        .then(async res => {
            if (res.data.accessToken) {
                await localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                // axios.get(API_PATH + "user/me", {
                //     headers: {
                //         "Authorization": res.data.tokenType + " " + res.data.accessToken
                //     }
                // })
                //     .then((res) => {
                //         const role = res.data.roles;
                //         role.filter(item => item.name === "ROLE_DIRECTOR").length > 0 ?
                //             window.location.href = "/admin/dashboard" :
                //             window.location.href = "/admin/store"
                //     })
                window.location.href = "/main"
            }
        })
        .catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message)
            }
        })
        .finally(() => {
            dispatch(updateState({isLoading: false}))
        })
}