import React, { Component } from "react";
import { Sidebar, ButtonToggle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import ListUsers from "../ListUsers";

class SidebarDrivers extends Component {
    state = {
        open: true
    };

    handleOpenSidebar(action) {
        this.setState({
            open: action
        });
    }

    render() {
        return (
            <Sidebar open={this.state.open}>
                {this.props.data.drivers.map(user => (
                    <ListUsers key={user.id} user={user} />
                ))}

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

const mapStateToProps = state => ({
    data: state.drivers
});

export default connect(mapStateToProps)(SidebarDrivers);
