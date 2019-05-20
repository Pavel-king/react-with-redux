import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes.js'

const defaultState = {
    inputValue: '123',
    list: [1, 2]
}

export default (state = defaultState, action) => {
    let newState;
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            newState.inputValue = '';
            return newState;
        case DELETE_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1);
            return newState;
        case INIT_LIST_ACTION:
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
        default:
            return state
    }
}