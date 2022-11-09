import React from "react";
//import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
	return <div>
		<Paginator currentPage={currentPage}
						onPageChanged={onPageChanged}
						totalItemsCount={totalUsersCount}
						pageSize={pageSize} />
		{users.map(u => <User user={u}
									followingInProgress={props.followingInProgress}
									follow={props.follow}
									unfollow={props.unfollow}
									key={u.id} />
		)}
	</div>
}

export default Users;