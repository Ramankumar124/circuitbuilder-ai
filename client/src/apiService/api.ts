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

interface circuitReq {
  prompt: string
}
interface shareReq {
  circuitId: string
}

interface saveProject {
  projectName: string, 
  prompt: string, 
  circuit: object, 
  userId: string
}




export function userLogin(data: loginReq) {
  return http.post(`/login`, data);
}

export function userSignup(data: signreq) {
  return http.post(`/signup`, data);
}

export function createCiruit(data: circuitReq) {
  return http.post('/circuit', data)
}

export function generateSharelink(data: shareReq) {
  return http.post("/share", data)
}

export function saveProject(data: saveProject) {
  return http.post("/save-circuit", data);
}

export function enhancePrompt(data: circuitReq) {
  return http.post("/enhance-prompt", data);
}

export function getAllProject(id: string) {
  http.get(`/projects/${id}?page=1&limit=5`)
}