import axios from "axios";

export class serverCall {
    static sendget (url){
        try {
            const response = axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);
            return response;
        } catch (error) {
            console.error("GET request error:", error);
            throw error;
        }
    }
    
    static sendpost(url, data) {
        console.log("Sented data : ",url)
        console.log("Posting to:", `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, "Data:", data);
        return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, data);
    }
}



// import axios from "axios";

// export class serverCall {
//     static sendget(){};
//     static sendpost(url,data){
//         console.log(1,process.env.NEXT_PUBLIC_BACKEND_URL)
//         return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`,data)
//     }
// }