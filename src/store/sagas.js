import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {initListAction} from './actionCreators.js'
import {GET_INIT_LIST} from './actionTypes.js'
import axios from 'axios'

function* getInitList(){
    try{
        //等待返回数据
        const res = yield axios.get('/api');
        const action = initListAction(res.data)
        //再次派发action，不使用store.action
        yield put(action)
    }catch(e){
        console.log(e);
    }
    
}
function* mySaga() {
    //每一次收到 GET_INIT_LIST 类型的action时，都会调用getInitList 函数或者generator, 推荐generator
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;