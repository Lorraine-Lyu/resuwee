import { EDIT_NAME, EDIT_DATE, EDIT_REGION, EDIT_EDUCATION, EDIT_CONTACT, EDIT_EDUCATION_INFO } from "./actions";
import { combineReducers } from "redux";
import {contact, education} from "../layout/util"


const initialState = {
    user: {
        name: '',
        date: '',
        region:'',
        education:'',
        contact:[new contact(0)],
        educationExperience:[new education(0)]
    },
    style: {
        themeColor: '',
    }
}

// console.log(store.getState());

function updateUser(state=initialState, action) {
    var user = state.user;
    switch(action.type) {
        case EDIT_NAME:
            user.name = action.text;
            console.log(state);
            return Object.assign({}, state, user);
        case EDIT_DATE:
            user.date = action.text;
            return Object.assign({}, state, user);
        case EDIT_REGION:
            user.region = action.text;
            return Object.assign({}, state, user);
        case EDIT_EDUCATION:
            user.education = action.text;
            return Object.assign({}, state, user);
        case EDIT_CONTACT:
            user.contact = action.contactObject;
            return Object.assign({}, state, user);
        case EDIT_EDUCATION_INFO:
            user.educationExperience = action.eduObject;
            return Object.assign({}, state, user);
        default:
            return state;
    }
}

function updateStyle(state=initialState, action) {
    return state;
}

export const updateApp = combineReducers({
    updateUser,
    updateStyle
})