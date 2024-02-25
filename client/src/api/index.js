import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-image-generator-20nr.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePosts = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) =>
  await API.post("/generateImage/", data);
