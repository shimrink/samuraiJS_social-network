import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.post}>
				<img src='https://fun-cats.ru/wp-content/uploads/1/3/d/13d97279c5398255a75910ffe789624f.jpeg' alt='avatar' />
				<p>{props.message}</p>
			</div>
			<span>{`Like ${props.likesCount}`}</span>
		</div>
	);
}

export default Post;