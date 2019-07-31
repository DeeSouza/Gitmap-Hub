import React from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

const UserInfo = ({ user }) => (
    <Container>
        <div className="header">
            <div className="name">{user.name ? user.name : "Anonymous"}</div>
            <div className="bio">{user.bio}</div>
            <div className="numbers">
                <div>
                    {user.public_repos}
                    <h6>Repos</h6>
                </div>
                <div>
                    {user.following}
                    <h6>Seguindo</h6>
                </div>
                <div>
                    {user.followers}
                    <h6>Seguidores</h6>
                </div>
            </div>
        </div>
    </Container>
);

UserInfo.propTypes = {
    user: PropTypes.shape({
        public_repos: PropTypes.number,
        following: PropTypes.number,
        followers: PropTypes.number
    })
};

export default UserInfo;
