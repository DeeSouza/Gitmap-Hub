import styled from "styled-components";

export const Line = styled.div`
    font-family: "Titillium Web";
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;

    &:first-child {
        margin-top: 0px;
    }

    div {
        &.image {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            overflow: hidden;

            img {
                width: 50px;
            }
        }

        &.info {
            display: flex;
            flex-direction: column;
            margin-left: 15px;
        }
    }

    button.remove {
        justify-self: flex-end;
        margin-left: auto;
        padding: 0px 10px;
        color: #f55;
        border: none;
        background: none;
        outline: none;
        width: auto;
        height: 16px;
        font-size: 16px;
        cursor: pointer;
    }

    a {
        padding: 0px 10px;
        font-size: 14px;
        color: #555;
    }
`;

export default { Line };
