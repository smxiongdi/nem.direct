import React from 'react';
import { connect } from 'react-redux';
import Dash from './Dash.js';
import { myProfile } from './../../redux/actions/settings';

const mapStateToProps = state => {
    return ({
        pageTitle: state.pageTitle || 'icx.market dashboard',
        uname: state.uname,
        profile: state.profile,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        dispatch,
        fetchProfile: () => dispatch(myProfile()),
    })
}

const DashContainer = connect(mapStateToProps, mapDispatchToProps)(Dash);
export default DashContainer;
