import React, { Component } from 'react';
import Search from '../src/Search';
import Profile from '../src/Profile';

const API = 'https://api.github.com/users';

class Githubsearcher extends Component {
    constructor(props) {
        super(props);
        this.state = {

            userdata:'',
            username:'hamzaimran-prog',    //hamzaimran-prog
            name:'',
            url:'',
            avatar:'',
            followers:'',
            following:'',
            repos:'',
            notFound:''


          }
    }

    getProfile(username){

        let Finalurl = `${API}/${username}`;

        fetch(Finalurl)
        .then((res) => res.json())
        .then((data) =>{

            this.setState({

                userdata:data,
                username:data.login,
                name:data.id,
                url:data.url,
                avatar:data.avatar_url,
                followers:data.followers,
                following:data.following,
                repos:data.repos_url,
                notFound:data.message,
                

            })

        })

        .catch((error) => console.log('Error in fetching Data',error));

    }

    componentDidMount(){

        console.log(this.state.username);
        this.getProfile(this.state.username);

    }
    render() { 
        return ( 

           
        <div className="row">
    <div className="col s8 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Github Page</span>
        
        </div>
        <div className="card-action">
          <Search get={this.getProfile.bind(this)}/>
         <Profile userD={this.state}/>
        </div>
      </div>
    </div>
  </div>
                
           

         );
    }
}
 
export default Githubsearcher;