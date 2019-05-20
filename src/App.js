import React, {Component} from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI.js'
import store from './store/index.js'
import {getInitList, getInputChangeAction, getBtnClickAction, getItemDeleteAction, initListAction} from './store/actionCreators'
//import axios from 'axios'


class App extends Component{
  constructor(props){
    super(props)
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render(){
    return <TodoListUI 
              inputValue = {this.state.inputValue}
              list = {this.state.list}
              handleInputChange = {this.handleInputChange}
              handleBtnClick = {this.handleBtnClick}
              handleItemDelete = {this.handleItemDelete}
    />
  }
  componentDidMount(){
    //使用redux-thunk
    //获取一个action的函数，函数获取异步数据
    // const action = getTodoList()
    // store.dispatch(action)

    //使用redux-saga
    const action = getInitList();
    store.dispatch(action);
    //请求数据的操作在sagas.js文件中
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action = getBtnClickAction()
    store.dispatch(action);
  }
  handleItemDelete(index){
    const action = getItemDeleteAction(index)
    store.dispatch(action)
  }
}

export default App;
