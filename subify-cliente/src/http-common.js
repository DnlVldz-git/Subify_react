import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:9595/subify",
    headers:{
        "Content-type":"application/json"
    }
});