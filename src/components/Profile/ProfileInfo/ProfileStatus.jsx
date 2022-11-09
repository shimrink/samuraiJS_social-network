import React from "react";
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
		this.props.updateStatus(this.state.status);
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return <div>
			{this.state.editMode
			? <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} />
			: <span onDoubleClick={this.activateEditMode}>Status: {this.props.status || "-----"}</span>}
		</div>
	}
}

export default ProfileStatus;