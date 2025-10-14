import Profile from './Profile';
import ProfileClass from './ProfileClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // runs after render
    console.log('About mounted...');
  }

  render() {
    // const { count, count2 } = this.state;

    return (
      <div>
        <h1>About us</h1>
        <h2> This is the about page</h2>

        {/* {this.state.users.map((user) => {
          <ProfileClass
            name={user.name}
            location={user.location}
            contact={user.contact}
          />;
        })} */}
        {/* <ProfileClass /> */}
        <Profile name="Peris" />
      </div>
    );
  }
}

export default About;
