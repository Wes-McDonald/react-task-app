import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LoginContainer extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
        }
    }

    handleChange = (event) => {
        this.setState({username: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.users.indexOf(this.state.username) > -1) {
            this.props.storeCurrentUser(this.state.username)
            this.props.history.push("/tasks");
        } else {
            alert("This user doesn't exist. Please try again!")
        }
    };

    render(){
        return(
            <>
            <form className="form-inline justify-content-center form-content" onSubmit={this.handleSubmit}>
                    <div className="form-group p-2">
                        <label>
                            Username:
                        </label>
                        <input className="ml-2" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>

                    <input className="btn btn-outline-success mr-2" type="submit" value="Login"/>
        
                </form>
            </>
        )
    }
    
};

export default withRouter(LoginContainer)