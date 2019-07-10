export const EDIT_NAME = "EDIT NAME";
export const EDIT_DATE = "EDIT DATE";
export const EDIT_REGION = "EDIT REGION";
export const EDIT_CONTACT = "EDIT CONTECT";
export const EDIT_EDUCATION = "EDIT EDUCATION";
export const EDIT_EDUCATION_INFO = "EDIT EDUCATION INFO";

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