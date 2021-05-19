import TasksContainer from "./components/tasks/TasksContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import HomeContainer from "./components/home/HomeContainer";
import JournalContainer from "./components/journal/JournalContainer";
import { Col, Container, Row } from "react-bootstrap";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <HeaderContainer />
      <Container fluid>
        <Row>
          <Col xs={1} className="sidebar-wrapper">
            <SidebarContainer />
          </Col>
          <Col xs={10}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/tasks" component={TasksContainer} />
              <Route exact path="/journal" component={JournalContainer} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>

  
   </BrowserRouter>
  );
}

export default App;
