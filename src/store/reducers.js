import { EDIT_NAME, EDIT_DATE, EDIT_REGION } from "./actions";
import { combineReducers } from "redux";


const initialState = {
    user: {
        name: '',
        date: '',
        region:'',
        education:'',
        contact:[],
        educationExperience:[]
    },
}

function updateUser(state=initialState, action) {
    switch(action.type) {
        case EDIT_NAME:
            return Object.assign({}, state, {name: action.text});
        case EDIT_DATE:
            return Object.assign({}, state, {date: action.text});
        case EDIT_REGION:
            return Object.assign({}, state, {region: action.text});
        default:
            return state;
    }
}

function updateStyle(state=initialState, action) {
    return state;
}

export default updateApp = combineReducers({
    updateUser,
    updateStyle
})