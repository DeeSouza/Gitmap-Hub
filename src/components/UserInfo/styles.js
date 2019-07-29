import styled from "styled-components";

export const Container = styled.div`
    width: 300px;

    div {
        &.header {
            div {
                &.name {
                    display: block;
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: 700;
                }

                &.bio {
                    font-size: 12px;
                }

                &.numbers {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 10px;

                    div {
                        font-weight: 700;
                        background-color: #f7f7f7;
                        flex: 1;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;

                        h6 {
                            margin-top: 3px;
                        }
                    }
                }
            }
        }
    }
`;

export default { Container };
