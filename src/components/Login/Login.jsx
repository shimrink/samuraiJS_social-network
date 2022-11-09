import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from '../../utils/validators/validators';
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (handleSubmit, error) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field component={Input}
							name='email'
							validate={[required]}
							placeholder='Email' />
			</div>
			<div>
				<Field component={Input}
							name='password'
							validate={[required]}
							type='password'
							placeholder='Password' />
			</div>
			<div>
				<Field component={Input}
							name='rememberMe'
							type='checkbox' />
				<span>remember me</span>
			</div>
			{error && <div className={s.formSummaryError}>
				{error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {login})(Login);