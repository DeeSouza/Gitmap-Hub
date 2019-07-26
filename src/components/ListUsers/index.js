import React, { Component, Fragment } from "react";
import { Line } from "../ListUsers/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class ListUsers extends Component {
    render() {
        return (
            <Fragment>
                <Line>
                    <div className="image">
                        <img
                            src={this.props.user.avatar_url}
                            alt={this.props.user.name}
                        />
                    </div>
                    <div className="info">
                        <strong>{this.props.user.name}</strong>
                        <small>{this.props.user.login}</small>
                    </div>
                    <div className="remove">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <a href={this.props.user.url}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </Line>
            </Fragment>
        );
    }
}
