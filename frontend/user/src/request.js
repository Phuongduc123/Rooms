const axios = require("axios");

//signup
export const postInformToSignup = async (
  params,
  setSuccessSignup,
  setNotification
) => {
  await axios
    .post("http://127.0.0.1:8000/renterregister/", params)
    .then((response) => {
      console.log("signup: ", response);
      if (
        Array.isArray(response.data.email) === true &&
        Array.isArray(response.data.username) === true
      ) {
        setNotification([response.data.email[0], response.data.username[0]]);
      } else if (Array.isArray(response.data.email) === true) {
        setNotification([response.data.email[0]]);
      } else if (Array.isArray(response.data.username) === true) {
        setNotification([response.data.username[0]]);
      } else {
        setSuccessSignup(true);
        setNotification([]);
      }
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

export const postInformTenantToSignup = async (
  params,
  setSuccessSignup,
  setNotification
) => {
  console.log("121321");
  await axios
    .post("http://127.0.0.1:8000/hostregister/", params)
    .then((response) => {
      console.log("signup tenant: ", response);
      if (
        Array.isArray(response.data.email) === true ||
        Array.isArray(response.data.address) === true ||
        Array.isArray(response.data.fullname) === true ||
        Array.isArray(response.data.identication) === true ||
        Array.isArray(response.data.password) === true ||
        Array.isArray(response.data.phoneNumber) === true ||
        Array.isArray(response.data.username) === true  
      ) {
        setNotification(["Xem lại thông tin đăng ký của bạn"]);
      } else{
        setSuccessSignup(true);
      }
      
      
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};


//login
export const postToLogin = async (
  params,
  setLogged
) => {
  await axios
    .post("http://127.0.0.1:8000/login/", params)
    .then((response) => {
      console.log("login: ", response);
      if(response.data.success==="not oke"){

      }else{
        setLogged(true)
        localStorage.setItem("Rooms_logged",true)
        localStorage.setItem("Rooms_token",response.data.token)
      }
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

//profile
export const getRenterProfile = async (
  setProfile
) => {
  console.log(localStorage.getItem("Rooms_token")) 
  await axios
    .get("http://127.0.0.1:8000/renterProfile/", {headers:{Authorization: `JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("login: ", response);
      
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};
