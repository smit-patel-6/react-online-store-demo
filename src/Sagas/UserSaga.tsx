import { put,takeEvery} from 'redux-saga/effects';
import { getUsers } from '../Services/UserService'

function* fetchUsers(){
    let data:any = [];
    yield getUsers().then((response:any) => {
        data = response.data.users;
    })

    yield put({type:'SET_USERS',payload:data})
}

function* UserSaga() {
    yield takeEvery('FETCH_USERS',fetchUsers)
}

export default UserSaga;