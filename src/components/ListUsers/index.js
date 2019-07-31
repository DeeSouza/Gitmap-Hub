import React, { Component } from "react";
import { Line } from "../ListUsers/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DriverActions } from "../../store/ducks/drivers/drivers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { PropTypes } from "prop-types";

const MySwal = withReactContent(Swal);

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = id => {
        MySwal.fire({
            title: "Opa! Calma aí...",
            text: "Você tem certeza que quer deletar esse usuário?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, eu quero!",
            cancelButtonText: "Nem"
        }).then(result => {
            if (result.value) {
                this.props.addDriverDelete(id);
                Swal.fire("Pronto!", "O usuário foi deletado.", "success");
            }
        });
    };

    render() {
        const { user } = this.props;

        return (
            <Line>
                <div className="image">
                    <img src={user.avatar_url} alt={user.name} />
                </div>
                <div className="info">
                    <strong>{user.name}</strong>
                    <small>{user.login}</small>
                </div>
                <button
                    className="remove"
                    onClick={() => this.handleDelete(user.id)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <a href={user.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faChevronRight} />
                </a>
            </Line>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(DriverActions, dispatch);

ListUsers.propTypes = {
    handleDelete: PropTypes.func,
    addDriverDelete: PropTypes.func,
    user: PropTypes.shape({
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        id: PropTypes.number,
        url: PropTypes.string
    })
};

export default connect(
    null,
    mapDispatchToProps
)(ListUsers);
