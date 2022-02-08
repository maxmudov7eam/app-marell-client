
// export const API_PATH = "https://app-store-magazin.herokuapp.com/api/";
export const API_PATH = "http://89.108.98.60/api/";
// export const API_PATH = "http://localhost:83/api/";

export const TOKEN_NAME = "app-marell-token"

export const CONFIG = {
    headers: {
        "Authorization": localStorage.getItem(TOKEN_NAME)
    }
}