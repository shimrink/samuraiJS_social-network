import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {
	let friendsElement = props.friends.map( f => <Friends name={f.name} /> );
	return (
		<div className={s.wrapper}>
			<nav>
				<NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
				<NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
				<NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
				<NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
				<NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
				<NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item + ' ' + s.last_item}>Settings</NavLink>
			</nav>
			<h3>Friends</h3>
			<div className={s.friends}>
				{friendsElement}
			</div>
		</div>
	);
}

export default Navbar;