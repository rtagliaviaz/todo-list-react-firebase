import React, { Component } from 'react'
import db from '../config';
import firebase from 'firebase/app';
import Navbar from './Navbar';

export default class Todos extends Component {
//state
  state = {
    todos:[],
    edit: false,
    todoTitle: "",
    id:"",
    message:"",
    userName: firebase.auth().currentUser.email
  }
//functions
  //get todos from database
  componentDidMount(){
    db
      .collection(this.state.userName)
      .onSnapshot((snapShots) =>{
        this.setState({
          todos: snapShots.docs.map( doc =>{
            return{id: doc.id, data: doc.data()};
            
          })
        })
      }, error => {
        console.log(error);
      })   
  }
  //onChange function input field
  changed = e =>{
    this.setState({
      todoTitle:e.target.value
    })
  }

  //submit button function to add the new todo
  formSubmit = e =>{
    e.preventDefault();
    const {todoTitle, edit} = this.state;
    //ternary operator, if edit false add todo, else edit todo
    !edit ?
    db
      .collection(this.state.userName)
      .add({
        title: todoTitle
      }).then(() =>{
        this.message('Added');
      }).catch(() =>{
        console.log('error');
      })
    
    : this.update();
  }

//get the todo by id  and verify if exists in the db
  editTodo = (id) =>{
    const todoRef = db.collection(this.state.userName).doc(id);

    todoRef
      .get()
      .then((doc)=> {
        if (doc.exists) {
          this.setState({
            todoTitle: doc.data().title,
            edit: true,
            id: doc.id
          })
        } else {
          this.message("error, the document doesn't exist")
        } 
      }).catch((err) => {
        console.log(err);
      })
  };

  //updates the value of todo name
  update = () => {
    const { id, todoTitle } = this.state;

    db
      .collection(this.state.userName)
      .doc(id)
      .update({
        title: todoTitle
      }).then(() => {
        this.message("edited");
        this.setState({
          edit: false
        })
      }).catch((err) =>{
        console.log(err);
      })
  }

//delete todo
  delTodo = (id) => {
    db
      .collection(this.state.userName)
      .doc(id)
      .delete()
      this.message("Deleted")
  }

  //alerts
  message = (message) =>{
    this.setState({
      message
    })
  }
 

  render() {
    const {todos, todoTitle, message, userName, logout} = this.state;
    return (
      
      <div>
        <Navbar/>
        { message ? <div className="alert alert-warning alert-dismissible fade show" >
  <strong>{message}</strong>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> : null }
        <div className="col-md-6 offset-md-3 my-4">
          <h1>hello, {userName}</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="New To Do"
              value={todoTitle}
              onChange={this.changed}
               />
            <button type="submit" className="btn btn-dark btn-block">
              {/* if click edit icon change the button add todo by edit */}
            { this.state.edit === true ? 'Edit': 'Add ToDo'}</button>
            
          </div>
          
        </form>
        </div>
        <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            { todos && todos !== undefined ? todos.map ((todo, key) =>(
            <tr key={key}>
              <td className="px-4">{todo.data.title}</td>
              <td>
                {/* onClick edit function*/}
                <i className="fas fa-pencil-alt" onClick={() => this.editTodo(todo.id)}></i>
              </td>
              <td>
                <i className="fas fa-trash" onClick={() => this.delTodo(todo.id)}></i>
                </td>
            </tr>
            )): null}
          </tbody>
        </table>
        </div>

      </div>
    )
  }
}

