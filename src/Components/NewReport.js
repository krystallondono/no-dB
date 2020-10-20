import React, {Component} from 'react';


class NewReport extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            input: ''
        }
    }

    handleInput = (value) => {
        this.setState({input: value})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.updateFn(id, this.state.input);
        this.handleToggle();
    }

    render(){
        return (
            <div>
                <p>{this.props.report.date}</p>
                <p>{this.props.report.location}</p>
                {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.input}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.report.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.report.description}</p>
                        <button onClick={this.handleToggle}>Update Report</button>
                    </div>
                )}
            </div>
        )
    }
}

export default NewReport;