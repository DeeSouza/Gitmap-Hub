import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import User from "../../components/User";
import UserInfo from "../../components/UserInfo";
import { Creators as ModalActions } from "../../store/ducks/adduser/adduser";

import { PropTypes } from "prop-types";

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
        },
        popUpInfo: null
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
                <User
                    user={driver}
                    onClick={() =>
                        this.setState({
                            popUpInfo: driver
                        })
                    }
                />
            </Marker>
        );
    }

    addPopupDriver() {
        const { popUpInfo } = this.state;

        return (
            this.state.popUpInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popUpInfo.geo.lon}
                    latitude={popUpInfo.geo.lat}
                    offsetTop={30}
                    closeOnClick={false}
                    onClose={() => this.setState({ popUpInfo: null })}
                >
                    <UserInfo user={popUpInfo} />
                </Popup>
            )
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

                {this.addPopupDriver()}
            </ReactMapGL>
        );
    }
}

const mapStateToProps = state => ({
    data: state.drivers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ModalActions, dispatch);

Map.propTypes = {
    viewport: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number,
        bearing: PropTypes.number,
        pitch: PropTypes.number
    }),
    popUpInfo: PropTypes.oneOfType([PropTypes.bool]),
    data: PropTypes.shape({
        drivers: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                avatar_url: PropTypes.string,
                bio: PropTypes.string,
                followers: PropTypes.number,
                following: PropTypes.number,
                name: PropTypes.string,
                login: PropTypes.string,
                url: PropTypes.string,
                public_repos: PropTypes.number,
                geo: PropTypes.shape({
                    lon: PropTypes.number,
                    lat: PropTypes.number
                })
            })
        )
    }),
    handleMapClick: PropTypes.func,
    addUserShow: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
