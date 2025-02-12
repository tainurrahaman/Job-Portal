import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logoutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default UseAxiosSecure;
