import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../Routes/Home/Home'
import PledgeFormPage from '../../Routes/PledgeFormPage/PledgeFormPage'
import PledgeListPage from '../../Routes/PledgeListPage/PledgeListPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import './App.css'

function App() {
		return (
			<main className='App'>
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route path={'/PledgeFormPage'} component={PledgeFormPage} />
					<Route path={'/PledgeListPage'} component={PledgeListPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
		);
}
export default App;
