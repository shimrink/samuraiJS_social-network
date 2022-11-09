import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
	return (
		<div className={s.wrapper}>
			<img src='https://fun-cats.ru/wp-content/uploads/1/3/d/13d97279c5398255a75910ffe789624f.jpeg' alr='avatar' />
			<p>{props.name}</p>
		</div>
	);
}

export default Friends;