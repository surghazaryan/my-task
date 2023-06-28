import { put, takeEvery } from "redux-saga/effects";

function* workerSetname(action) {
   
 }
  


export function* watchMainSaga() {
  yield takeEvery("edit-name", workerSetname);
}
