import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";

import Routes from "./routes";

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Routes />
        </Fragment>
    );
};

export default App;
