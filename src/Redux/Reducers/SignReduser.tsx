import { Action } from "../../Utils/DataTypes/ActionType";
import { StateSign } from "../../Utils/DataTypes/DefaultStateSignReducer";
import { UserType } from "../../Utils/DataTypes/UserType";


const defaultState: StateSign = {
    user: null
}

const SIGN_IN = "SIGN_IN";

export const signReducer = (state:StateSign = defaultState, action:Action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, user: action.payload};
        
        default: return state;
    }
}

export const signUserAction = (payload:UserType) => ({type:SIGN_IN, payload});