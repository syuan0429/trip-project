export const setToken = (token) => {
  localStorage.setItem("TRIPWAY-TOKEN", token);
};

export const getToken = () => {
  return localStorage.getItem("TRIPWAY-TOKEN") || "";
};
