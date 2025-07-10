import Cookies from "js-cookie";

const getAuthToken = () => {
  return Cookies.get("token");
};

export default getAuthToken;
