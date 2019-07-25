import styled from "styled-components";

export const Main = styled.main`
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
`;

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    top: 0;
    visibility: ${props => (props.open ? "visible" : "hidden")};
    transition: all 0.25s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Titillium Web";
    z-index: 3;

    form {
        width: 90%;
        max-width: 280px;
        background-color: #fff;
        border-radius: 5px;
        padding: 15px;
        transition: opacity 0.25s ease-in-out, transform 0.15s ease-in;
        transform: ${props => (props.open ? "scale(1)" : "scale(0)")};
        opacity: ${props => (props.open ? "1" : "0")};

        @media (min-width: 568px) {
            max-width: 300px;
        }

        h3 {
            text-align: center;
            font-size: 17px;
        }

        div {
            &.form-group {
                margin: 10px 0px;

                &.group-buttons {
                    justify-content: space-between;
                    display: flex;
                }

                input {
                    width: 100%;
                    border: none;
                    height: 40px;
                    font-size: 15px;
                    border: 1px solid #c7c7c7;
                    border-radius: 5px;
                    color: #a7a7a7;
                    padding: 5px;
                    font-weight: 100;
                    font-family: "Titillium Web";
                }

                button {
                    height: 40px;
                    width: 120px;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 16px;
                    font-family: "Titillium Web";
                    font-weight: bold;
                    border: none;

                    &.btn-cancel {
                        background-color: #ff6767;
                    }

                    &.btn-save {
                        background-color: #2196f3;
                    }
                }
            }
        }
    }
`;

export default { Main, Modal };
