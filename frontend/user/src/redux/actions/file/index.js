import {
    GET_FILE,
    GET_FILE_TO_REDUX,
    GET_FILE_FROM_POST_TO_REDUX,
    GET_FILE_FROM_POST,
    GET_SEARCH_FILE,
    SET_CHAT,
    GET_POST_BY_AMOUNT,
    GET_POST_BY_AMOUNT_TO_REDUX
} from './action_type'

export default {
    getFile: (file)=>{
        return {
            type:GET_FILE,
            params:{
                file:file,
            }
        }
    },
    getFileToRedux: (file)=>{
        return {
            type:GET_FILE_TO_REDUX,
            params:{
                file:file
            }
        }
    },
    getFileFromPost:()=>{
        return {
            type:GET_FILE_FROM_POST,
        }
    },
    getFileFromPostToRedux:(file)=>{
        return {
            type:GET_FILE_FROM_POST_TO_REDUX,
            params:{
                file:file
            }
        }
    },
    getSearchFile:(file)=>{
        return {
            type: GET_SEARCH_FILE,
            params:{
                file:file
            }
        }
    },
    setChat:(chat)=>{
        return {
            type:SET_CHAT,
            params:{
                chat
            }
        }
    },

    getPostByAmount:(start,number)=>{
        return {
            type:GET_POST_BY_AMOUNT,
            params:{
                start,
                number
            }
        }
    },
    getPostByAmountToRedux:(file)=>{
        return {
            type:GET_POST_BY_AMOUNT_TO_REDUX,
            params:{
                file:file
            }
        }
    },

}