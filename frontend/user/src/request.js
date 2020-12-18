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
      if(response.data==="not ok"){

      }else{
        setLogged(true)
        console.log(response)
        localStorage.setItem("Rooms_logged",true)
        localStorage.setItem("Rooms_token",response.data.token)
        localStorage.setItem("Rooms_user_type",response.data.user_type)
        
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
  await axios
    .get("http://127.0.0.1:8000/renterProfile/", {headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("login: ", response);
      if(response.status===200){
        setProfile(response.data)
      }
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const putRenterUpdateProfile  = async (
  params
) => { 
  await axios
    .put("http://127.0.0.1:8000/renterUpdateProfile/",params,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log(response)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const getHostProfile = async (
  setProfile
) => { 
  await axios
    .get("http://127.0.0.1:8000/hostProfile/", {headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("host Profile: ", response);
      if(response.status===200){
        setProfile(response.data)
      }
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const putHostUpdateProfile  = async (
  params
) => { 
  await axios
    .put("http://127.0.0.1:8000/hostUpdateProfile/",params,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("update profile:",response)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const putChangePassword  = async (
  params,
  setNotification
) => { 
  await axios
    .put("http://127.0.0.1:8000/changePassword/",params,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("change password:",response)
      if(response.data!=="ok"){
        setNotification(true); 
      }else{
        setNotification(false);
      }
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

//Post

export const getHostPostList = async (
  setResponse
) => { 
  await axios
    .get("http://127.0.0.1:8000/post/hostPostList/", {headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("host post list: ", response);
      setResponse(response.data)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const getRoomDetail = async (
  params,
  setResponse
) => { 
  await axios
    .get(`http://127.0.0.1:8000/post/postDetail/${params.id}`, {headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("post Detail: ", response);
      setResponse(response.data)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}


