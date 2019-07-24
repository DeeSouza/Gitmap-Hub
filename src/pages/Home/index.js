import React, { Component, Fragment } from "react";
import ReactMapGL from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Main } from "./styles";

import Drivers from "../../components/Drivers/Drivers";
import { Creators as DriversActions } from "../../store/ducks/drivers/drivers";

import "mapbox-gl/dist/mapbox-gl.css";

class Home extends Component {
    state = {
        viewport: {
            width: "100%",
            height: "100%",
            latitude: -22.725,
            longitude: -47.6476,
            zoom: 12,
            bearing: 0,
            pitch: 0
        }
    };

    handleMapClick(data) {
        const [lon, lat] = data.lngLat;
        console.log(lon, lat);
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
                        onClick={this.handleMapClick}
                        captureClick={true}
                        onViewportChange={viewport =>
                            this.setState({ viewport })
                        }
                    />
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
