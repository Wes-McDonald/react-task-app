import React from "react";

const TaskGroup = (props) => {
    let {tasksHandler, title} = props;
    
        return(
            <div>
                <h4 className="text-center">{title}</h4>
                {tasksHandler}
            </div>
        )
    
};

export default TaskGroup;