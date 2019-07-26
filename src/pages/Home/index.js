import React, { Component, Fragment } from "react";
import { Main } from "./styles";

import SidebarDrivers from "../../components/SidebarDrivers/";
import Map from "../../components/Map";
import AddDriver from "../../components/AddDriver";

class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* Main */}
                <Main>
                    {/* Map */}
                    <Map />
                    <AddDriver />
                </Main>

                {/* Left SideBar */}
                <SidebarDrivers />
            </Fragment>
        );
    }
}

export default Home;
