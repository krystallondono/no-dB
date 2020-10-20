// import axios from 'axios';
import React, {Component} from 'react';


class PreReports extends Component{
    constructor (){
        super();

        this.state = {
            isEditing: false
        }
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})

    }
    
   
    


    render(){
        console.log(this.props)
        return(
            <div className = 'prev-reports'>
                <div className = 'prev-boxes'>
                    <h2>{this.props.report && this.props.report.location}</h2>
                    <h3>{this.props.report && this.props.report.name}</h3>
                    <h3>{this.props.report && this.props.report.date}</h3>
                    <p className = 'description'>{this.props.report && this.props.report.description} </p>
                    <p>{this.props.report && this.props.report.comments}</p>
                    
                    <span>
                    {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.comments}
                            name = 'comments'
                            onChange={e => this.handleInput(e)}/>
                        <button onClick={(id) => this.addComment(id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        
                        <button onClick={this.handleToggle}>Add a comment</button>
                    </div>
                )}
                </span>
                <div>
                    <button onClick = {(id) => this.props.deletePost(id)} >Delete Post</button>
                </div>
                </div>
             
                
            </div>
        )
    }
}

export default PreReports;