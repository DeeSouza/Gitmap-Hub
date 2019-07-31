import React, { Component } from "react";
import { Profile } from "./styles";
import { PropTypes } from "prop-types";

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

User.propTypes = {
    onClick: PropTypes.func,
    user: PropTypes.shape({
        avatar_url: PropTypes.string
    })
};

export default User;
