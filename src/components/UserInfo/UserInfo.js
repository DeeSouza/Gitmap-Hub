import React from "react";
import { Container } from "./styles";

const UserInfo = ({ user }) => (
    <Container>
        <div className="header">
            <div className="name">{user.name}</div>
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

export default UserInfo;
