import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header>
			<img src='https://www.tctmagazine.com/downloads/8332/download/Autodesk-logo.png?cb=05a923bcee4fbbc61e67476114315d4c&w=2272' alt='logo' />
			<div className={s.login_block}>
				{props.isAuth
				? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
				: <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;