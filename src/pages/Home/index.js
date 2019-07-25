import React, { Component, Fragment } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Main, Modal } from "./styles";

import Drivers from "../../components/Drivers/Drivers";
import User from "../../components/User/User";
import { Creators as DriversActions } from "../../store/ducks/drivers/drivers";

import "mapbox-gl/dist/mapbox-gl.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -22.725,
            longitude: -47.6476,
            zoom: 12,
            bearing: 0,
            pitch: 0
        },
        modal: this.props.data.modal,
        geo: {
            lon: 0,
            lat: 0
        },
        repositoryInput: ""
    };

    componentDidMount() {
        window.addEventListener("resize", this.resizableMap);
        this.resizableMap();
    }

    resizableMap = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    };

    handleMapClick = data => {
        const [lon, lat] = data.lngLat;

        this.setState({
            modal: true
        });

        this.setState({
            geo: { lon, lat }
        });
    };

    handleCancel = e => {
        e.preventDefault();

        this.setState({
            modal: false
        });
    };

    handleAddDriver = async e => {
        e.preventDefault();

        const { repositoryInput: user, geo } = this.state;

        await this.props.addDriverRequest({
            user,
            geo
        });
    };

    addMarkerDriver(driver) {
        return (
            <Marker
                latitude={driver.geo.lat}
                longitude={driver.geo.lon}
                offsetLeft={-20}
                offsetTop={-10}
                key={driver.id}
            >
                <User user={driver} />
            </Marker>
        );
    }

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
                    >
                        {this.props.data.drivers.map(driver =>
                            this.addMarkerDriver(driver)
                        )}
                    </ReactMapGL>

                    <Modal open={this.state.modal}>
                        <form onSubmit={this.handleAddDriver}>
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
                </Main>

                <Drivers />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    data: state.drivers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(DriversActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
