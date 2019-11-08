import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Config from '../../config'
import Home from '../../Routes/Home/Home'
import PledgeFormPage from '../../Routes/PledgeFormPage/PledgeFormPage'
import PledgeListPage from '../../Routes/PledgeListPage/PledgeListPage'
import NotFoundPage from '../../Routes/NotFoundPage/NotFoundPage'
import PledgesContext from '../../PledgesContext'
import './App.css'


class App extends React.Component {
	state = {
		pledges: [],
		error: null,
	}

	handleAddPledge = pledge => {
		this.setState({
			pledges: [...this.state.pledges, pledge]
		})
	}

	updatePledge = updatedPledge => {
		this.setState({
			pledges: this.state.pledges.map(pledge =>
			(pledge.id !== updatedPledge.id) ? pledge : updatedPledge.likes
			)
		})
	}

	componentDidMount() {
		fetch(`${Config.API_BASE_URL}/pledges`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			}
		})
			.then(res => {
				if (!res.ok) {
					throw new Error(res.status)
				}
				return res.json()
			})
			.then(pledges => {
				this.setState({ pledges })
			})
			.catch(error => this.setState({ error }))
	}

	render() {
		const contextValue = {
			pledges: this.state.pledges,
			addPledge: this.handleAddPledge,
			updatePledge: this.updatePledge
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
