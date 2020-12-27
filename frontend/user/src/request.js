import {NotificationManager} from 'react-notifications';
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
        console.log(response)
        localStorage.setItem("Rooms_logged",true)
        localStorage.setItem("Rooms_token",response.data.token)
        localStorage.setItem("Rooms_user_type",response.data.user_type)
        localStorage.setItem("Rooms_username",response.data.username)
        setLogged(true)
        
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
      if(response.data==="ok"){
        NotificationManager.success('Chờ được xác nhận', 'Đăng bài thành công');
      }else{
        NotificationManager.error('Có lỗi khi đăng bài', 'Lỗi');
      }
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
      if(response.status===200){
        NotificationManager.success('Chờ được xác nhận', 'Đăng bài thành công');
      }else{
        NotificationManager.error('Có lỗi khi đăng bài', 'Lỗi');
      }
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
      setResponse(response.data.data)
      
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
      setResponse(response.data.data)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const postPost  = async (
  params
) => { 
  await axios
    .post("http://127.0.0.1:8000/post/createPost/",params,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("create Post:",response)
      if(response.data==="ok"){
        NotificationManager.success('Chờ được xác nhận', 'Đăng bài thành công');
      }else{
        NotificationManager.error('Có lỗi khi đăng bài', 'Lỗi');
      }
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const updatePost  = async (
  params,
  id
) => { 
  await axios
    .put(`http://127.0.0.1:8000/post/updatePost/${id}/`,params,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("update Post:",response)
      if(response.data==="ok"){
        NotificationManager.success('Chờ được xác nhận', 'Đăng bài thành công');
      }else{
        NotificationManager.error('Có lỗi khi đăng bài', 'Lỗi');
      }
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const getPostHomepage = async (
  params,
  setPostLocation
) => { 
  await axios
    .get(`http://127.0.0.1:8000/post/homePage/${params.location}/${params.start}/${params.end}`, {headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("home page: ", response);
      setPostLocation(response.data.data)
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const postFavorite  = async (
  params
) => { 
  await axios
    .post(`http://127.0.0.1:8000/favorite/add/${params.postId}/`,{},{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("post favorite:",response)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const getFavorite = async (
  params,
  setPostFavorite
) => { 
  await axios
    .get(`http://127.0.0.1:8000/favorite/list/${params.start}/${params.end}/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("get favorite:",response)
      setPostFavorite(response.data.data)
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
};

export const postReview = async (
  params,
  id
) => {
  await axios
    .post(`http://127.0.0.1:8000/review/createReview/${id}/`,params,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("post review:",response)
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const getReview = async (
  params,
  setCommentList
) => {
  await axios
    .get(`http://127.0.0.1:8000/review/listReviewOfPost/${params.id}/${params.start}/${params.end}/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("get review:",response)
      setCommentList(response.data.data)
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const getSearchPost = async (
  params,
  setSearchPost
) => {
  await axios
    .get(`http://127.0.0.1:8000/post/search/${params.searching}/${params.start}/${params.end}/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("search post:",response)
      setSearchPost(response.data.data)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}


//admin
export const getUnconfirmedHostList = async (
  params,
  setUnconfirmedHostList
) => {
  await axios
    .get(`http://127.0.0.1:8000/admin/unconfirmedhostlist/${params.start}/${params.end}/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("get uncofirmed host list:",response)
      setUnconfirmedHostList(response.data.data)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
}

export const getConfirmedHostList = async (
  params,
  setConfirmedHostList
) => {
  await axios
    .get(`http://127.0.0.1:8000/admin/confirmedhostlist/${params.start}/${params.end}/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("get uncofirmed host list:",response)
      setConfirmedHostList(response.data.data)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
} 


//message 
export const getFullMessage = async (
  params,
  setFullMessage
) => {
  await axios
    .get(`http://127.0.0.1:8000/chat/chat/${params.id}/${params.start}/${params.end}/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("get full message:",response.data.data)
      setFullMessage(response.data.data)
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
} 

export const getIdChat = async (
  setIdChat
) => {
  await axios
    .get(`http://127.0.0.1:8000/chat/thread/`,{headers:{Authorization:`JWT ${localStorage.getItem("Rooms_token")}`}})
    .then((response) => {
      console.log("get Id Chat:",response)
      setIdChat(response.data[0].id)
      
    })
    .catch((error) => {
      console.log("error: ", error);  
    });
} 


