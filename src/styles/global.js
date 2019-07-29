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
        font-family: "Roboto", Arial, Helvetica, sans-serif;
    }

    .toast-success{
        background: #dfffdb!important;
        color: #006f23!important;
    }

    .toast-success-progress{
        background: #029600!important;
    }

    .mapboxgl-popup-close-button{
        font-size: 17px;
        top: 8px !important;
        right: 8px !important;
        width: 20px;
    }
`;

export default GlobalStyle;
