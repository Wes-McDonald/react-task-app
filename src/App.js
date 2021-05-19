import TasksContainer from "./components/tasks/TasksContainer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import './App.css';
import HomeContainer from "./components/home/HomeContainer";
import JournalContainer from "./components/journal/JournalContainer";
import { Col, Container, Row } from "react-bootstrap";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import { Component } from "react";
import { taskData } from "./utils/taskData";
import LoginContainer from "./components/login/LoginContainer";

class App extends Component {
  state = {
    appName: "Todoey",
    routes: [{path: "/", label: "Home"}, {path: "/tasks", label: "Tasks"}, {path: "/journal", label: "Journal"}],
    isAuth: false,
    users: taskData.map(taskObj => taskObj.username),
    currentUser: "",
    currentUserTasks: []
  }

  storeCurrentUser = (user) => {
    this.setState(
      {
        currentUser: user, 
        currentUserTasks: taskData.filter(taskObj => taskObj.username === user)[0].tasks,
        isAuth: true
      }
      );
      console.log(this.state)
  }; 

  logoutCurrentUser = () => {
    this.setState(
      {
        isAuth: false,
        currentUser: "",
        currentUserTasks: []
      }
    );
    this.props.history.push("/login"); // I get an error if I use withRouter outside the BrowserRouter, so I moved BrowserRouter to index.js
  }



  render() {

  
  return (
   
    <div className="App">
      <HeaderContainer 
        appName={this.state.appName} 
        routes={this.state.routes} 
        logout={this.logoutCurrentUser}
        isAuth={this.state.isAuth}
        user={this.state.currentUser}/>

      <Container fluid>
        <Row>

          <Col xs={2} className="sidebar-wrapper">
            <SidebarContainer routes={this.state.routes} />
          </Col>

          <Col xs={10}>
            <Switch>
              <Route exact path="/">
                { 
                !this.state.isAuth ? 
                  <Redirect to="/login" /> : 
                  <HomeContainer /> 
                } 
              </Route> 

              {/* <Route exact path="/" render={() => <HomeContainer isAuth={isAuth} />} /> */}

              <Route 
                exact path="/login" 
                render={() => <LoginContainer users={this.state.users} storeCurrentUser={this.storeCurrentUser} />} />
                
              {/* <Route exact path="/tasks" component={TasksContainer} /> */}
                
              <Route exact path="/tasks">
                { 
                !this.state.isAuth ? 
                  <Redirect to="/login" /> : 
                  <TasksContainer tasks={this.state.currentUserTasks} user={this.state.currentUser} /> 
                }
              </Route>

              <Route exact path="/journal" component={JournalContainer} />
            </Switch>

          </Col>
        </Row>
        
      </Container>
    </div>

  
 
   
  );
  }
};

export default withRouter(App);

