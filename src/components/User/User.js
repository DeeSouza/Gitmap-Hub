import React, { Component } from "react";
import { Profile } from "./styles";

export class User extends Component {
    render() {
        return (
            <Profile
                avatar={this.props.user.avatar_url}
                onClick={this.props.onClick}
            />
        );
    }
}

export default User;
