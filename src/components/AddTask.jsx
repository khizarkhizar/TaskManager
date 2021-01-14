import Task from "./../task.json";
import React,{Component} from 'react';
import { Link } from "react-router-dom";
import TaskList from './TaskList';
class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = { data: Task.Task  }
    }
    render() {  
        return ( 

            <div className="container">
                <h3 classNAme="center">Task Manager</h3>
                    <div className="col align-self-center">
                <input  type='button' value='add Task'></input>
                    </div>
                   


            </div>


         );
    }
}
 

export default AddTask;