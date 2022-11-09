import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLenght10 = maxLenghtCreator(10);

let AddNewPostForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={s.new_post}>
		<Field className={s.textarea}
				component={Textarea}
				name='newPostText'
				placeholder='Post message'
				validate={[required, maxLenght10]} />
		<button className={s.button}>Send</button>
	</form>
}

let AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return <div>
		<p className={s.post_title}>My posts</p>
		<div className={s.posts}>
			<AddNewPostReduxForm onSubmit={onAddPost} />
			{postsElements}
		</div>
	</div>
}

export default MyPosts;