import axios from "axios";

export const hacker = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
    headers: { 'Content-type': 'application/json' }
})