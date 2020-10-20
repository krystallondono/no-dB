import React, {Component} from 'react';
import axios from 'axios';
import PreReports from './PreReports';

class Reports extends Component{
    // set state for data users will interact with
    constructor (){
        super();
        this.state = {
            previousReports: [],
            comments: ''
            
        }
    }

    componentDidMount(){
        axios.get(`/api/sightings/`)
        .then(res => {
            this.setState({previousReports: res.data})
        })
        .catch(err => console.log(err))   
     };
   

     addComment = (id) =>{
        const {comments} = this.state;
        axios.put(`/api/sightings/${id}`, {comments: comments})
        .then(res => this.setState({previousReports: res.data}))
        .catch(err => console.log(err));
    }

    deletePost = (id) =>{
        axios.delete(`/api/sightings/${id}`)
        .then(res => {
            this.setState({previousReports: res.data})
        })
        .catch(err => console.log(err))     
    };
    

    //  map over this data to display on PreReports component
    render(){
        console.log(this.state.previousReports);
        const mappedReports = this.state.previousReports.map((report, i) => {
            return <PreReports
                    key = {i}
                    report ={report}
                    addComment = {this.state.addComment}
                    deletePost ={this.state.deletePost} 
                    />

        })
        
        return(
            <div>
                
                {mappedReports}
            </div>
        )
    }
}

export default Reports;