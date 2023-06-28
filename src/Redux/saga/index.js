import { all } from "redux-saga/effects";
import { watchMainSaga } from "./MainSaga";

export default function* rootSaga() {
  yield all([
    watchMainSaga()
]);
}
