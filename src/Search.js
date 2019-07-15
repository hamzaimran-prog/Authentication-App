import React, { Component } from 'react';
import Profile from './Profile';

// get
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    submitHandler(event){

        event.preventDefault();
        let val = this.refs.name.value;
        console.log(val);
        this.props.get(val);
        this.refs.name.value = ' ';
       

    }

    render() { 
        return ( 

            <div>

                <h1>Search page</h1>
                <br/>
                
                <form onSubmit={this.submitHandler.bind(this)}>
                <input type='text' name='username' ref='name' placeholder='Search Github Profile'/>
                </form>

            </div>

         );
    }
}
 
export default Search;