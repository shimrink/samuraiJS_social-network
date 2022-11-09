import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {

	let state = props.messagesPage;

	let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
	let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	const maxLenght50 = maxLenghtCreator(50);

	const AddMessageForm = (props) => {
		return <form onSubmit={props.handleSubmit} className={s.textarea}>
			<Field component={Textarea}
					validate={[required, maxLenght50]}
					name='newMessageBody'
					placeholder='text message...' />
			<button>Send</button>
		</form>
	}

	const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

	return <div className={s.wrapper}>
		<h2>Dialogs</h2>
		<div className={s.dialogs}>
			{dialogsElements}
		</div>
		<div className={s.line}></div>
		<div className={s.messages}>
			{messagesElements}
		</div>
		<AddMessageReduxForm onSubmit={addNewMessage} />
	</div>
}

export default Dialogs;