import React, { Component, Fragment } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
import ReactMapGL from "react-map-gl";

import { Main } from "./styles";

class Home extends Component {
    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    render() {
        return (
            <Fragment>
                <Main>
                    <ReactMapGL
                        {...this.state.viewport}
                        mapboxApiAccessToken="pk.eyJ1IjoiZGVlc291emEiLCJhIjoiY2p5YWRqZWc5MDFmbzNkcGp2azdxbDJ5MSJ9.A4Dx7OsLVbWEaoRww9rnCg"
                        onViewportChange={viewport =>
                            this.setState({ viewport })
                        }
                    />
                </Main>
            </Fragment>
        );
    }
}
export default Home;
