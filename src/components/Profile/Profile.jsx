import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
//import s from './Profile.module.css';

const Profile = (props) => {
	return <div>
		<ProfileInfo profile={props.profile}
						status={props.status}
						updateStatus={props.updateStatus} />
		<MyPostsContainer />
	</div>
}

export default Profile;