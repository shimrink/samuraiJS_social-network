import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
	return {
		friends: state.sidebar.friends
	}
}

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;