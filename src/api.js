import axios from "axios"

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params:{
        key:process.env.REACT_APP_YT_API_KEY,
    },
})
console.log("YT API Key:", process.env.REACT_APP_YT_API_KEY); // Debugging

export default request