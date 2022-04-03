import axios from "axios"

export const GetData = async () => await axios.get("/api/videos")

export const loginDetailsFunc = async (email,password) => {
    const resp = await axios.post("/api/auth/login", {email, password})
    return resp
}

export const GetLikedVideos = async ({encodedToken}) =>{
    const response = await axios.get("/api/user/likes", {
        headers: {authorization: encodedToken}
    });
    return response
};

export const setLikedVideos = async ({encodedToken, video}) =>{
    const resp = await axios.post("/api/user/likes", {video}, {headers: {authorization: encodedToken}
    })
    return resp

}

export const deleteLikedVideos = async({videoId, encodedToken}) =>{
    const resp = await axios.delete(`/api/user/likes/${videoId}`, {headers: {authorization: encodedToken}} )
    return resp
}
