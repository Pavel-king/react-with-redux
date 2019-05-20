import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes.js'
// import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getBtnClickAction = () => ({
    type: ADD_TODO_ITEM
})
export const getItemDeleteAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data: data
})
export const getInitList = () => ({
    type: GET_INIT_LIST
})

//使用redux-thunk
// export const getTodoList = () => {
//     return (dispatch)=>{
//         axios.get('/api').then((res)=>{
//             console.log(res.data)
//             const data = res.data
//             const action = initListAction(data);
//             dispatch(action)
//           }).catch((err)=>{
//             console.log(err)
//           })
//     }
// }