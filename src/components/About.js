import Profile from './Profile';
import ProfileClass from './ProfileClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };
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

        {/* <div>
          Count: {count} Count2: {count2}
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,
              });
            }}
          >
            Count increase
          </button>
        </div> */}

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

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2> This is the about page</h2>
//       <ProfileClass name="Peris (class)" location="Athens" contact="@peris1000" />
//     </div>
//   );
// };

export default About;
