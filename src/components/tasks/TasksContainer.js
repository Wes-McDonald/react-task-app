import React, { Component } from "react";
import "./tasks.css";
import { taskData } from "../../utils/taskData";
import TaskGroup from "./TaskGroup";
import Task from "./Task";
import { myGuid } from "../../utils/guidGenerator";

export default class TasksContainer extends Component {
    constructor(){
        super();
        this.state = {
            tasks: taskData[0].tasks,
            newTask: {task: "", type: "personal", _creator: taskData[0].username},
            canEdit: false
        }
        this.viewTasksHandler = this.viewTasksHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.deleteTask = this.deleteTask.bind(this);
    };

    // deleteTask before was an arrow function. And arrow functions don't bind to the constructor, that's why I was getting an error
    deleteTask = (id) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task._id !== id)
            }
        })
    };

    // Edit Tasks

    // I won't bind this method to the constructor since it's an arrow function
    editTask = (task) => {
        this.setState({newTask: task, canEdit: true})
    }

    handleSubmittedEditedTask = () => {
        this.setState(prevState => {
            return{
                ...prevState,
                tasks: prevState.tasks.filter(task => task._id !== prevState.newTask._id),
                canEdit: false
            }
        })
    }

    handleCancel = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                canEdit: false,
                newTask: {task: "", type: "personal", _creator: taskData[0].username}
            }
        })
    }

    viewTasksHandler(type) {
        return(                
            <div>
                {
                    this.state.tasks.map(userTask => {
                        // condition ? return true thing : return false thing
                        return userTask.type === type ? 
                        <Task
                            key={userTask._id}
                            id={userTask._id}
                            task={userTask.task}
                            deleteTask={this.deleteTask} 
                            editTask={()=>this.editTask(userTask)}
                        /> 
                        : null;
                    })
                }
            </div>
        )
    }

    handleChange(event) {
        // {type: jdfksd,  task:fdskjfld }
        let newTask = {...this.state.newTask, [event.target.name]: event.target.value};
        this.setState({newTask: newTask})
        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.newTask);
        let newTask = {...this.state.newTask, _id: myGuid()};

        if(!newTask.task) {
            alert("Please fill out a task")
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState, 
                    tasks: prevState.tasks.concat(newTask),
                    newTask: {task: "", type: "personal", _creator: taskData[0].username}
                }
            })
        }
       
    }



    render() {
        const allTaskTypes = (() => {
            let taskTypes = []; // ["personal", "work", "goals"];
                this.state.tasks.forEach(task => taskTypes.push(task.type))
             
                let filteredTypes = taskTypes.filter((type, index) => taskTypes.indexOf(type) === index);
           
                return filteredTypes;
        })();
        return(
            <div className="Tasks container mx-auto">

                <form className="form-inline justify-content-center form-content" onSubmit={this.handleSubmit}>
                    <div className="form-group p-2">
                        <label>
                            Task:
                        </label>
                        <input className="ml-2" type="text" name="task" value={this.state.newTask.task} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group p-2">
                        <label>
                            Type:
                        </label>
                        <select className="ml-2" type="text" name="type" value={this.state.newTask.type} onChange={this.handleChange}>
                         {allTaskTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
                        </select>
                    </div>

                    <input hidden={this.state.canEdit} className="btn btn-outline-success mr-2" type="submit" value="Add Task"/>
                    <input hidden={!this.state.canEdit} className="btn btn-outline-success mr-2" type="submit" onClick={this.handleSubmittedEditedTask} value="Edit Task"/>
                    <input hidden={!this.state.canEdit} className="btn btn-outline-secondary mr-2" type="button" onClick={this.handleCancel} value="Cancel"/>


                </form>

              {
                allTaskTypes.map((type, index) => {
                  return < TaskGroup
                              key={index}
                              title={type} 
                              tasksHandler = {this.viewTasksHandler(type)}
                      
                          />})
              }

            </div>
            )
    }
}