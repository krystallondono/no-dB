import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    constructor(){
        super();

        this.state = {
            location: '',
            name: '',
            date: '',
            description: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    submitHandler= (e) =>{
        const {location, name, date, description} = this.state;
        axios.post('/api/sightings', {location, name, date, description})
        .then(res => {
            console.log(res)
          })
          .catch(err => console.log(err));
    }

    render(){
        return(
            <div className ='boxes'>
                
                <form className = 'form' onSubmit = {this.submitHandler}>
                   <div>
                    <input type = 'text' placeholder ='Location' name ='location' onChange = {e => this.handleChange(e)}/>
                    </div>
                    <div>
                    <input type = 'text' placeholder ='Your name' name ='name' onChange = {e => this.handleChange(e)}/>
                    </div>
                    <div>
                    <input type = 'text' placeholder ='Date' name ='date' onChange = {e => this.handleChange(e)}/>
                    </div>
                    <div>
                    <input className = 'description-input' type = 'text' placeholder ='Describe encounter' name = 'description' onChange = {e => this.handleChange(e)}/>
                    </div>
                    <button>Submit</button>


                </form>
            </div>
        )
    }
}

export default Form;