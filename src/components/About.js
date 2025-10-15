import Profile from './Profile';
import ProfileClass from './ProfileClass';
import React from 'react';
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // runs after render
    // console.log('About mounted...');
  }

  render() {
    return (
      <div>
        <h1>About us</h1>
        <h2> This is the about page</h2>
        <div>
          Logged in user:
          {/* <UserContext.Consumer>
            {(data) => {
              console.log(data);
            }}
          </UserContext.Consumer> */}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <ProfileClass />
        <Profile name="Peris" />
      </div>
    );
  }
}

export default About;
