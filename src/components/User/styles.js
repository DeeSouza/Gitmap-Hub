import styled from "styled-components";

export const Profile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    background-image: url(${props => props.avatar});
    background-size: cover;
    border: 2px solid #fff;
    box-shadow: #000 0px 0px 10px -2px;
`;

export default { Profile };
