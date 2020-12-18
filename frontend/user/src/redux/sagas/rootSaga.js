import { all } from 'redux-saga/effects'
import fileSaga from "./fileSaga";
import postSaga from "./postSaga"


export default function* rootSaga() {
	yield all([
		fileSaga(),
		postSaga(),
	]);
}
