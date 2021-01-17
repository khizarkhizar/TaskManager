import Task from "./../task.json";
import React,{Component} from 'react';

class Tasklist extends Component {
    constructor(props) {
        super(props);
        
        this.state = { data: Task.Task  }
    }


    addItem(item) {


    }
    render() { 
        return (
            <div >

          
              <div className='container'>
                     
          {this.state.data.map(
            (d) =>
               (
                 <div  key={d.id} className="row">         
            <div className="col-md-15">
                
                <div class="card">
          <div class="card-body">
     
     
        <div className="row"> 
                   <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend"><input  type="radio"  /></span>
          </div>
       
   
       
          <h5 class="card-title col-md-7">{d.Task_Name}</h5>
        
          <div class="col-md-4" >Edit</div>
          
         
          
          </div> <div>{d.Task_Desc}</div>
              
                </div>
               </div>
              </div></div>

              
              )
          )}


                <form onSubmit={this.addItem}>
                  
          
     
            
                  
                </form>
              </div>
            </div>
          );
    }
}
 
export default Tasklist;