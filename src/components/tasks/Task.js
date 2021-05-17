import React from "react";

const Task = (props) => {
        return(
            <div className="card">
                <div className="card-body row">
                    <div className="col-md-10">
                        {props.task}
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger mr-2" type="button" onClick={()=>props.deleteTask(props.id)}>Delete</button>
                        <button className="btn btn-primary mr-2" type="button" onClick={props.editTask}>Edit</button>
                    </div>
                </div>
            </div>
        )
    
};

export default Task;