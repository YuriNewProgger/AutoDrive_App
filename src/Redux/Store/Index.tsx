import { createStore, combineReducers } from "redux";
import { signReducer } from "../Reducers/SignReduser";

const rootReducer = combineReducers({
    _signReducer: signReducer
});

export const store = createStore(rootReducer);

