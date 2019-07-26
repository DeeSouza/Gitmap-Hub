import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import User from "../../components/User/User";
import { Creators as ModalActions } from "../../store/ducks/adduser/adduser";

import "mapbox-gl/dist/mapbox-gl.css";

const TokenMap =
    "pk.eyJ1IjoiZGVlc291emEiLCJhIjoiY2p5YWRqZWc5MDFmbzNkcGp2azdxbDJ5MSJ9.A4Dx7OsLVbWEaoRww9rnCg";

class Map extends Component {
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
        }
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

        this.props.addUserShow({
            modal: true,
            geo: {
                lon,
                lat
            }
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
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={TokenMap}
                attributionControl={false}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onClick={event => this.handleMapClick(event)}
                captureClick={true}
                onViewportChange={viewport => this.setState({ viewport })}
            >
                {this.props.data.drivers.map(driver =>
                    this.addMarkerDriver(driver)
                )}
            </ReactMapGL>
        );
    }
}

const mapStateToProps = state => ({
    data: state.drivers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ModalActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
