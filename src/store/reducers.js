import { EDIT_NAME, EDIT_DATE, EDIT_REGION, EDIT_EDUCATION, EDIT_CONTACT, EDIT_EDUCATION_INFO , CREATE_WORK, EDIT_WORK} from "./actions";
import { combineReducers } from "redux";
import {contact, education, workExperience} from "../layout/util"


const initialState = {
    user: {
        name: '',
        date: new Date(0),
        region:'',
        education:'',
        contact:[new contact(0)],
        educationExperience:[new education(0)],
        workExperience: [new workExperience()]
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

export const updateApp = combineReducers({
    updateUser,
    updateStyle
})