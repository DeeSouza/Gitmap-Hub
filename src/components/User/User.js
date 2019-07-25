import React, { Component } from "react";
import { Profile } from "./styles";

export class User extends Component {
    render() {
        return <Profile avatar={this.props.user.avatar_url} />;
    }
}

export default User;
