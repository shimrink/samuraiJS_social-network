import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
	if(!profile) {
		return <Preloader />
	}

	return <div>
		{/* <img className={s.banner} src='https://animal.tden.ru/wp-content/uploads/2014/10/akita.jpg' alt='banner' /> */}
		<div className={s.info}>
			<img src={profile.photos.large} alt='avatar' />
			<p className={s.name}>{profile.fullName}</p>
			<div className={s.desc}>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
				<p>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</p>
				<p>Description: {profile.lookingForAJobDescription}</p>
				<p>{!profile.contacts.facebook ? '' : `Facebook: ${profile.contacts.facebook}`}</p>
				<p>{!profile.contacts.website ? '' : `Web Site: ${profile.contacts.website}`}</p>
				<p>{!profile.contacts.vk ? '' : `VK: ${profile.contacts.vk}`}</p>
				<p>{!profile.contacts.twitter ? '' : `Twitter: ${profile.contacts.twitter}`}</p>
				<p>{!profile.contacts.instagram ? '' : `Instagram: ${profile.contacts.instagram}`}</p>
				<p>{!profile.contacts.youtube ? '' : `YouTube: ${profile.contacts.youtube}`}</p>
				<p>{!profile.contacts.github ? '' : `GitHub: ${profile.contacts.github}`}</p>
				<p>{!profile.contacts.mainLink ? '' : `Main link: ${profile.contacts.mainLink}`}</p>
			</div>
		</div>
	</div>
}

export default ProfileInfo;