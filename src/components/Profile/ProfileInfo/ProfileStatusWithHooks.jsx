import React, { useEffect, useState } from "react";
// import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect( () => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return <div>
		{!editMode
		? <span onDoubleClick={ activateEditMode }>Status: {props.status || "-----"}</span>
		: <input onChange={ onStatusChange } onBlur={ deactivateEditMode } value={status} autoFocus={true} />}
	</div>
}

export default ProfileStatusWithHooks;