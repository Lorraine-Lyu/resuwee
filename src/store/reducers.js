import { EDIT_NAME, EDIT_DATE, EDIT_REGION, EDIT_EDUCATION, EDIT_CONTACT, EDIT_EDUCATION_INFO , CREATE_WORK, EDIT_WORK, LOG_IN, LOG_OUT, OVER_WRITE_ALL} from "./actions";
import { combineReducers } from "redux";
import {contact, education, workExperience} from "../layout/util"


const initialState = {
    login: false,
    name: "", //this is the username 
    password: "", 
    profile: {
        name: '', //this is user's real name
        date: new Date(0),
        region:'',
        education:'',
        contact:[new contact(0)],
        educationExperience:[new education(0)],
        workExperience: [new workExperience(0)]
    },
    style: {
        themeColor: '',
    }
}

// console.log(store.getState());

function updateUser(state=initialState, action) {
    var user = state.profile;
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
        case CREATE_WORK:
            user.workExperience = [new workExperience(0)];
            return Object.assign({}, state, user);
        case EDIT_WORK:
            user.workExperience = action.workObj;
            return Object.assign({}, state, user);
        default:
            return state;
    }
}

function updateStyle(state=initialState, action) {
    return state;
}

function loginStatusChange(state=initialState, action) {
    switch(action.type) {
        case LOG_IN:
            var obj = {login: true };
            return Object.assign({}, state, obj);
        case LOG_OUT:
            var obj = {login: false };
            return Object.assign({}, state, obj);
        case OVER_WRITE_ALL:
            return Object.assign({}, action.all);
        default:
            return state;
    }
}

export const updateApp = combineReducers({
    updateUser,
    updateStyle,
    loginStatusChange
})