import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
        company: 'Default',
        avatar_url: 'https://picsum.photos/id/237/536/354',
      },
    };
  }

  async componentDidMount() {
    // runs after render
    // console.log('ProfileClass mounted...');

    // problem of SPA
    // this.timer = setInterval(() => {
    //   console.log('interval call');
    // }, 1000);

    // api calls
    const data = await fetch('https://api.github.com/users/peris1000');
    const json = await data.json(); // will return a promise thats why we need await
    // console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.state.count !== previousState.count) {
      // console.log('state.count changed');
    }
    // console.log('ProfileClass did update');
  }

  componentWillUnmount() {
    // console.log('ProfileClass will unmount');
    // clearInterval(this.timer);
  }

  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // debugger;
    return (
      <div className="m-4 p-4 border border-solid border-black rounded-lg bg-gray-50">
        <img className="w-[100px]" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Company: {company}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default ProfileClass;
