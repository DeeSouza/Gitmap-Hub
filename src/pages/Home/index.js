import React, { Component, Fragment } from "react";
import ReactMapGL from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Main, Modal } from "./styles";

import Drivers from "../../components/Drivers/Drivers";
import { Creators as DriversActions } from "../../store/ducks/drivers/drivers";

import "mapbox-gl/dist/mapbox-gl.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    state = {
        viewport: {
            width: "100%",
            height: "100%",
            latitude: -22.725,
            longitude: -47.6476,
            zoom: 12,
            bearing: 0,
            pitch: 0
        },
        modal: false,
        repositoryInput: ""
    };

    handleMapClick = data => {
        const [lon, lat] = data.lngLat;

        this.setState({
            modal: true
        });
    };

    handleCancel = e => {
        e.preventDefault();

        this.setState({
            modal: false
        });
    };

    handleAddDriver = () => {
        console.log(this.state.repositoryInput);
    };

    render() {
        const TokenMap =
            "pk.eyJ1IjoiZGVlc291emEiLCJhIjoiY2p5YWRqZWc5MDFmbzNkcGp2azdxbDJ5MSJ9.A4Dx7OsLVbWEaoRww9rnCg";

        return (
            <Fragment>
                <Main>
                    <ReactMapGL
                        {...this.state.viewport}
                        mapboxApiAccessToken={TokenMap}
                        attributionControl={false}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onClick={event => this.handleMapClick(event)}
                        captureClick={true}
                        onViewportChange={viewport =>
                            this.setState({ viewport })
                        }
                    />

                    <Modal open={this.state.modal}>
                        <form action="">
                            <h3>Adicionar Novo Usuário</h3>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Usuário no Github"
                                    value={this.state.repositoryInput}
                                    onChange={event =>
                                        this.setState({
                                            repositoryInput: event.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className="form-group group-buttons">
                                <button
                                    type="submit"
                                    className="btn-cancel"
                                    onClick={e => this.handleCancel(e)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    className="btn-save"
                                    onClick={() => this.handleAddDriver()}
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </Modal>
                </Main>

                <Drivers />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    drivers: state.drivers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(DriversActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
