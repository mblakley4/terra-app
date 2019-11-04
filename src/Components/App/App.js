import React from 'react'
import { Route, Switch } from 'react-router-dom'
import STORE from '../../STORE'
import Home from '../../Routes/Home/Home'
import PledgeFormPage from '../../Routes/PledgeFormPage/PledgeFormPage'
import PledgeListPage from '../../Routes/PledgeListPage/PledgeListPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import PledgesContext from '../../PledgesContext'
import './App.css'


class App extends React.Component {
	state = {
		pledges: STORE,
		error: null,
	}

	render() {
		const contextValue = {
			pledges: this.state.pledges,
			addPledge: this.addPledge
		}
		return (
			<main className='App'>
				<PledgesContext.Provider value={contextValue}>
					<Switch>
						<Route exact path={'/'} component={Home} />
						<Route path={'/PledgeFormPage'} component={PledgeFormPage} />
						<Route path={'/PledgeListPage'} component={PledgeListPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</PledgesContext.Provider>
			</main>
		);
	}
}
export default App;
