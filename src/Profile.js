import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        let userData = this.props.userD;
        let followers = `${userData.html_url}/followers`;
        let following = `${userData.html_url}/following`;
        let repos = `${userData.html_url}/repositories`;

      //  console.log('checking',this.props.userD);

      if(userData.notFound == 'Not Found'){

        return ( 

            <div>

                <h1>User Not Found</h1>
                

                
            </div>

         );
        }
        else{

            
        return ( 

           <section className="githubP">
               <div className='info'>
                   <a href={userData.homeurl} target='_blank' title={userData.name || userData.username}><img src={userData.avatar}></img></a>
                   <h2><a href={userData.homeurl} target='_blank' title={userData.username}>{userData.name || userData.username}</a></h2>
                   <h3>{userData.location}</h3>
                   </div>
                   <div className='Github-state'>

                    <ul>
                        <li><a href={followers} target='_blank' title='No of Followers'><i>{userData.followers}</i><span>Followers</span></a>
                        </li>

                        <li><a href={following} target='_blank' title='No of Following'><i>{userData.following}</i><span>Followings</span></a>
                        </li>

                        <li><a href={repos} target='_blank' title='No of Repositories'><i>{userData.public_repos}</i><span>Repositories</span></a>
                        </li>
                    </ul>

                   </div>
             

           </section>

         );
        }
    }
}
 
export default Profile;