import React from 'react';
import Image2 from './Image2';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image2 source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;
