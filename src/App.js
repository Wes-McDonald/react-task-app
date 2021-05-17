import TasksContainer from "./components/tasks/TasksContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import HomeContainer from "./components/home/HomeContainer";
import JournalContainer from "./components/journal/JournalContainer";

function App() {
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/tasks" component={TasksContainer} />
        <Route exact path="/journal" component={JournalContainer} />
      </Switch>
  
   </BrowserRouter>
  );
}

export default App;
