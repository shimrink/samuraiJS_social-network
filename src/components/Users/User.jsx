import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/default-user.jpg';
import { NavLink } from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
	return <div className={s.user}>
		<NavLink to={`/profile/${user.id}`}>
			<img src={user.photos.small != null
												? user.photos.small
												: userPhoto} alt="ava" />
		</NavLink>
		{user.followed
		? <button disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => {unfollow(user.id)}}>Unfollow</button>

		: <button disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => {follow(user.id)}}>Follow</button>}

		<div className={s.name_and_status}>
			<span>{user.name}</span>
			<span>{user.status}</span>
		</div>
		<div className={s.location}>
			<span>{'user.location.country'}</span>
			<span>{'user.location.city'}</span>
		</div>
	</div>
}

export default User;