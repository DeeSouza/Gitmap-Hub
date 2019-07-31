import React, { Component } from "react";
import { Sidebar, ButtonToggle, NoUser, ScrollList } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import ListUsers from "../ListUsers";

import { PropTypes } from "prop-types";
class SidebarDrivers extends Component {
    state = {
        open: true
    };

    handleOpenSidebar(action) {
        this.setState({
            open: action
        });
    }

    noUsers() {
        return (
            <NoUser>
                <h4>Você ainda não adicionou nenhum usuário no mapa.</h4>
                <h5>
                    Clique em algum lugar do mapa para adicionar um usuário.
                </h5>
            </NoUser>
        );
    }

    render() {
        return (
            <Sidebar open={this.state.open}>
                <ScrollList has={this.props.data.drivers.length > 0}>
                    {this.props.data.drivers.map(user => (
                        <ListUsers key={user.id} user={user} />
                    ))}
                </ScrollList>

                {this.props.data.drivers.length === 0 && this.noUsers()}

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

SidebarDrivers.propTypes = {
    open: PropTypes.bool,
    user: PropTypes.shape({
        id: PropTypes.number
    }),
    data: PropTypes.shape({
        drivers: PropTypes.array
    })
};

export default connect(mapStateToProps)(SidebarDrivers);
