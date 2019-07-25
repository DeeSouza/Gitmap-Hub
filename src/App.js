import React from "react";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={5000} />
        </Provider>
    );
};

export default App;
