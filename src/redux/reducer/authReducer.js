import {UPDATESTATE} from "../type/authType";

const initialState = {
    isLoading: false,
    me: {},
    partners: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATESTATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}