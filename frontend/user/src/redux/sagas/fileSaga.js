import {
	GET_FILE,
	GET_FILE_FROM_POST,
	GET_POST_BY_AMOUNT,
	GET_POST_BY_AMOUNT_TO_REDUX
} from "../actions/file/action_type";

import actions from "../actions/file/index";

// saga effect
import {put, takeLatest, call, all, fork, select, takeEvery,delay} from 'redux-saga/effects'




function* fileSaga() {
	
	
}

export default function *rootSaga() {
	yield all([fork(fileSaga)]);
}
