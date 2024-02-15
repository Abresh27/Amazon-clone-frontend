import React from "react";
import axios from "axios";

const axiosInstance = axios.create({
  // URL for the back-end server is running locally
  // baseURL: "http://localhost:3000",

  // URL for the back-end server is running on the render.com web-server
  baseURL: "https://amazon-api-backend.onrender.com",
});

export { axiosInstance };
