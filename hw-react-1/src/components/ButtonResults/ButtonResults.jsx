import {Component} from 'react';
import './ButtonResults.scss';
import PropTypes from 'prop-types';


export default class ButtonResults extends Component {

    state = {
        winner: null,
    };

    showResults = () => {
        const {votes, candidates} = this.props;
        const winnerId = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
        const winner = candidates.find(candidate => candidate.id === parseInt(winnerId));

        this.setState({ winner });
    }

    render() {
        const {buttonText} = this.props;
        const {winner} = this.state;
        return (
            <div>
                <button type="button" className="btn-show" onClick={this.showResults}>{buttonText}</button>
                {winner && <h2 className="winner-title">{winner.title} has won</h2>}
            </div>
        )
    }
}

ButtonResults.propTypes = {
    buttonText: PropTypes.string,
    votes: PropTypes.object,

    candidates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            smile: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired
};


