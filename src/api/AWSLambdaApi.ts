import axios from "axios";

const apiLambda = axios.create({
    baseURL:'https://iyemzmvsv2.execute-api.us-east-2.amazonaws.com'
})

export default apiLambda