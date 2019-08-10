import axios from "axios";
import { isError } from "util";

export default axios.create({
    baseURL: "http://localhost:3001/",
    responseType: "json"
  });

export async function validateUser(user) {
    var query = "?name="+user.name+"&password="+user.password;
    return axios({
        method: 'get',
        url: 'https://localhost:3001/login'+query,
        responseType: "json",
    }) //if the user exists, redirect to user's homepage
} 

export async function register(data) {
    return axios({
        method: "post",
        url:"localhost:3001/register",
        data:data,
        responseType:"json",
    }) // then pop up a panel to redirect user to his personal page
}

export async function editUser(data) {
    return axios({
        method: "post",
        url:'localhost:3001/edit',
        data:data,
        responseType:"json",
    })
}