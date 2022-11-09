import React from 'react';
import store from './redux/redux-store';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { withRouter } from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') )
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer') )

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return <div className="wrapper">
		<HeaderContainer />
		<main>
			<NavbarContainer />
			<React.Suspense fallback={<Preloader />}>
				<Routes>
					<Route path='/dialogs/' element={<DialogsContainer />} />
					<Route path='/profile/' element={<ProfileContainer />}>
						<Route path=':userId' element={<ProfileContainer />} />
					</Route>
					<Route path='/users/' element={<UsersContainer />} />
					<Route path='/login/' element={<LoginPage />} />
				</Routes>
			</React.Suspense>
		</main>
	</div>
	}
}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp})
)(App)

const SamuraiJSApp = (props) => {
	return <BrowserRouter basename='/'>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default SamuraiJSApp;