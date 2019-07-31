import axios from "axios";


function validateUser() {
    return axios({
        method: 'get',
        url: ,
        responseType: "json",
    }) //if the user exists, redirect to user's homepage
} 

function register(data) {
    return axios({
        method: "post",
        url:,
        data:data,
        responseType:"json",
    }) // then pop up a panel to redirect user to his personal page
}

function editUser(data) {
    return axios({
        method: "post",
        url:,
        data:data,
        responseType:"json",
    })
}