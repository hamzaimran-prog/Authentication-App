import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Apicall from '../src/apiCall';
import HeaderGithub from './header';
import Github from './Github-Searcher';
import Auth0Lock from 'auth0-lock';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 

      idToken:'',
      profile:{}

     }
}

static defaultProps = {

  domain: 'dev-7-7vxsjn.auth0.com',
  clientID: 'zfWmalIkn0BCMUXZTQbQqW1ctJe8Ydqo',
}

//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  
  this.lock = new Auth0Lock(this.props.domain,this.props.clientID);

  this.lock.on('authenticated',(authResult) =>{

    //console.log(authResult);

    this.lock.getProfile(authResult.idToken,(error,profile) =>{

      if(error){
        console.log(error);
        return;

      }
      // console.log(profile);

      this._setProfile(authResult.idToken,profile);

    });

  });

  this._getProfile();

}

_setProfile(idToken,Profile){

  localStorage.setItem('idToken',idToken);
  localStorage.setItem('profile',JSON.stringify(Profile));

  this.setState({

    idToken:localStorage.getItem('idToken'),
    profile:JSON.parse(localStorage.getItem('profile'))

  });

}

_getProfile(){

  if(localStorage.getItem('idToken')!=null){
    
    this.setState({

      idToken:localStorage.getItem('idToken'),
      profile:JSON.parse(localStorage.getItem('profile'))
  
    },()=>{

      console.log(this.state);

    });
  }

}

showPanelLock(){

this.lock.show();
  
}
_logOut(){

  this.setState({

    idToken:'',
    profile:''

  });

}

  render() {

    let gitValue;
    if(this.state.idToken){

      gitValue = <Github/>
    }
    else{

      gitValue = 'Please Click Login to move on Github Page';

    }

    return (
      <div className="App">
        <header className="App-header">
          
          
          <HeaderGithub 
          
          idToken={this.state.idToken}
          onLogout={this._logOut.bind(this)}
          onLogin={this.showPanelLock.bind(this)}/>
          {gitValue}
          
          </header>
      </div>
    );
  }
}

export default App;