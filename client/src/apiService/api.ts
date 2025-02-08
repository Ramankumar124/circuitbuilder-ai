import http from "./httpService";

interface loginReq {
  email: string;
  password: string;
}

interface signreq {
  email: string;
  password: string;
  firstName: string,
  lastName: string,
}




export function userLogin(data: loginReq) {
  return http.post(`/login`, data);
}

export function userSignup(data: signreq) {
  return http.post(`/signup`, data);
}



