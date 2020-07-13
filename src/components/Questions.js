import React , {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Answered from './Answered'
import Unanswered from './Unanswered'

class Questions extends Component {
    render() {
        const { authUserAnswers, match } = this.props;
		const id = match.params.id;
		const answered = authUserAnswers.hasOwnProperty(id) ? true : false;

		return (
			<Fragment>
				<h2 className="text-center my-3">
					<small>Would You Rather...</small>
				</h2>
				{answered ? <Answered id={id} /> : <Unanswered id={id} />}
			</Fragment>
		);
    }
}

function mapStateToProps({ authUsers, users }) {
	const authUserAnswers = users[authUsers].answers;

	return {
		authUserAnswers
	};
}


export default connect(mapStateToProps)(Questions)