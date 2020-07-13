import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GameQuestionList from './GameQuestionList';

class HomePage extends Component{
    render(){
        const { answeredIds, unansweredIds } = this.props;

		return (
			<Fragment>
				<Tabs>
					<Tab eventKey="unanswered" title="Unanswered Questions">
						<GameQuestionList
							idsList={unansweredIds}
							emptyListNote="No more Unswered Questions! Time to create some new ones! "
						/>
					</Tab>
					<Tab eventKey="answered" title="Answered Questions">
						<GameQuestionList
							idsList={answeredIds}
							emptyListNote="No Answered Questions yet! What are you waiting for???"
						/>
					</Tab>
				</Tabs>
			</Fragment>
		);
    }
}

function mapStateToProps({ authUsers, questions, users }) {
	const answeredIds = Object.keys(questions)
		.filter((id) => users[authUsers].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredIds = Object.keys(questions)
		.filter((id) => !users[authUsers].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	return {
		answeredIds,
		unansweredIds
	};
}

export default connect(mapStateToProps)(HomePage)