import React, { Component } from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showLock(){

        this.props.onLogin();

    }
    logOut(){

        this.props.onLogout();

    }

    render() { 

        var Page;

        if(this.props.idToken){

            //console.log('Id Token is:',idToken);
            Page =  <button onClick={this.logOut.bind(this)}>logout</button>

        }
        else{

           // console.log('Error! Please Login First');
           Page = <button onClick={this.showLock.bind(this)}>Login</button>

        }
        return ( 

            <div>
                {/* <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand> */}
                        <h1>Github Searcher </h1>
                        {Page}
                          
                        {/* </Navbar.Brand>
                    </Navbar.Header>

                <Nav>
                    <NavItem onClick={this.showLock.bind(this)} href="#">Login</NavItem>
                </Nav>

                </Navbar> */}
            
            </div>

         );
    }
}
 
export default Header;