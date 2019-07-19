import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
`;

export default GlobalStyle;
