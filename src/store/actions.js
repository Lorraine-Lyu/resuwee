export const EDIT_NAME = "EDIT NAME";
export const EDIT_DATE = "EDIT DATE";
export const EDIT_REGION = "EDIT REGION";
export const EDIT_CONTACT = "EDIT CONTECT";
export const EDIT_EDUCATION = "EDIT EDUCATION";
export const EDIT_EDUCATION_INFO = "EDIT EDUCATION INFO";
export const CREATE_WORK = "CREATE WORK";
export const EDIT_WORK = "EDIT WORK";
export const LOG_IN = "LOG IN";
export const LOG_OUT = "LOG OUT";
export const OVER_WRITE_ALL = "OVER WRITE ALL";

export function editName(text) {
    return {type: EDIT_NAME, text: text};
}

export function editDate(text) {
    return {type: EDIT_DATE, text: text};
}

export function editRegion(text) {
    return {type: EDIT_REGION, text: text};
}

export function editEducation(text) {
    return {type: EDIT_EDUCATION, text: text};
}

export function editContact(contact) {
    return {type: EDIT_CONTACT, contactObject:contact};
}

export function editEducationInfo(eduInfo) {
    return {type:EDIT_EDUCATION_INFO, eduObject:eduInfo};
}

export function createWork(){
    return {type:CREATE_WORK};
}

export function editWork(work){
    return {type: EDIT_WORK, workObj: work};
}

export function overWriteAll(all) {
    return {type: OVER_WRITE_ALL, all};
}

export function login() {
    return {type: LOG_IN};
}

export function logout() {
    return {type: LOG_OUT};
}

// export function setPassword() {
//     return {type: SET_PASSWORD};
// }