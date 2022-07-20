import axios from "axios";
import { put,takeEvery} from 'redux-saga/effects'

function* fetchUsers(){
    let data:any = [];
    yield axios.get('http://127.0.0.1:8000/users/').then((response:any) => {
        data = response.data.users;
    })

    yield put({type:'SET_USERS',payload:data})
}

function* UserSaga() {
    yield takeEvery('FETCH_USERS',fetchUsers)
}

export default UserSaga;