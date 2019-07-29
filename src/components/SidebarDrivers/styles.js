import styled from "styled-components";

export const Sidebar = styled.div`
    height: 97%;
    width: 320px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    margin: auto;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px -2px;
    border-radius: 8px;
    z-index: 2;
    transform: ${props =>
        props.open ? "translateX(0px)" : "translateX(-335px)"};
    transition: all 0.25s ease-in-out;
`;

export const ButtonToggle = styled.button`
    position: absolute;
    top: 14px;
    right: -40px;
    border: none;
    background-color: #fff;
    width: 40px;
    height: 60px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 6px -2px;
`;

export const NoUser = styled.div`
    padding: 0px 20px;

    h4 {
        color: #e02a2a;
    }

    h5 {
        margin-top: 10px;
        color: #000;
    }
`;

export const ScrollList = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${props => (props.open ? "15px 20px" : "10px 20px")};
`;

export default { Sidebar, ButtonToggle, NoUser, ScrollList };
