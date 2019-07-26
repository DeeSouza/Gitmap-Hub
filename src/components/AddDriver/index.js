import React, { Component } from "react";
import { Modal } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as ModalActions } from "../../store/ducks/adduser/adduser";
import { Creators as DriverActions } from "../../store/ducks/drivers/drivers";

class AddDriver extends Component {
    state = {
        user: ""
    };

    handleCancel = e => {
        e.preventDefault();

        this.props.addUserHide({
            modal: false
        });
    };

    handleAddDriver = e => {
        e.preventDefault();

        const { user } = this.state;
        const { geo } = this.props;

        this.props.addDriverRequest({
            user,
            geo
        });

        this.setState({
            user: ""
        });
    };

    render() {
        return (
            <Modal open={this.props.modal}>
                <form onSubmit={this.handleAddDriver}>
                    <h3>Adicionar Novo Usuário</h3>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Usuário no Github"
                            value={this.state.user}
                            onChange={event =>
                                this.setState({
                                    user: event.target.value
                                })
                            }
                        />
                    </div>

                    <div className="form-group group-buttons">
                        <button
                            type="button"
                            className="btn-cancel"
                            onClick={e => this.handleCancel(e)}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn-save">
                            Salvar
                        </button>
                    </div>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    modal: state.adduser.modal,
    geo: state.adduser.geo
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        Object.assign({}, ModalActions, DriverActions),
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDriver);
