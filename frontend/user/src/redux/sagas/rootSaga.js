import { all } from 'redux-saga/effects'
import fileSaga from "./fileSaga";


export default function* rootSaga() {
	yield all([
		fileSaga(),
	]);
}
