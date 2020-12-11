import axios from "axios";



export const loginUser = (payload) => {
  return axios({
    url: `https://dapi.quikdr.com/authentication `,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " ,
        "api-header-security":"C1kxIHN1D81zT7DXFQINoiQKDRXIMLCWTugbg9CorYg5SIxHsBBLNvNbebCxoC1qWhtx"
      },
    data: payload,
  });
};

export const userDetail = () => {
    return axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: "GET",
      headers: {
          "Content-Type": "application/json",       
        },
     
    });
  };