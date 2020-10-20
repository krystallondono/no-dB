import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Reports from './Components/Reports';
// import PreReports from './Components/PreReports';
import Form from './Components/Form';


class App extends Component {
  
  componentDidMount(){
    axios.get('/api/save-sightings/')
  .then(res => {
      this.setState({savedPosts: res.data})
  })
  .catch(err => console.log(err))
}


  

 

  

 


  render (){
    
    return (
    <div className="App">
      <Header/>
      <div>
        <p className = 'hero'>Welcome to Sighter! The only social media site dedicated to tracking reports of Ape Men. Browse previous reports and determine their believability. Or report on your own encounter with a bigfoot, sasquatch, or swamp ape below!  </p>
      </div>
      <Form/>
      <Reports  />     
       
    </div>
    )
  };
}

export default App;
