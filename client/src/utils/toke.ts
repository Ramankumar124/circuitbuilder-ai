export const removeToken = () => {
    localStorage.clear()
}

export const setToken = (token: string) => {
    localStorage.setItem("token", JSON.stringify(token));
}