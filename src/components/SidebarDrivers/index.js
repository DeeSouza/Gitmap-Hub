import React, { Component } from "react";
import { Sidebar, ButtonToggle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class SidebarDrivers extends Component {
    state = {
        open: false
    };

    handleOpenSidebar(action) {
        this.setState({
            open: action
        });
    }

    render() {
        return (
            <Sidebar open={this.state.open}>
                <ButtonToggle
                    onClick={() => this.handleOpenSidebar(!this.state.open)}
                >
                    <FontAwesomeIcon
                        icon={this.state.open ? faArrowLeft : faArrowRight}
                    />
                </ButtonToggle>
            </Sidebar>
        );
    }
}

export default SidebarDrivers;
