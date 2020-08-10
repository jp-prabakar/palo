import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIllnesses } from '../../actions';
import history from '../../history';

class SeverityLevel extends React.Component {

    // componentDidMount() {
    //     this.props.fetchIllnesses();
    // }

    handleClick(event){
        console.log('Handleclick:', event.target.id);
        history.push(`/illnesses/showWaitingTime/${event.target.id}`);
    }

    render() {

        console.log('Severity props: ', this.props);

        return (
            <div>
                <div class="ui raised very padded text container segment">
                    <h2>Select severity level:</h2>
                    <h3>{this.props.match.params.illness}</h3>
                        <i id="0" className="huge green smile outline link icon" onClick={(e) => this.handleClick(e)}></i>

                        <i id="1" className="huge olive meh outline link icon" onClick={(e) => this.handleClick(e)}></i>

                        <i id="2" className="huge yellow frown outline link icon" onClick={(e) => this.handleClick(e)}></i>

                        <i id="3" className="huge orange frown outline link icon" onClick={(e) => this.handleClick(e)}></i>

                        <i id="4" className="huge red frown outline link icon" onClick={(e) => this.handleClick(e)}></i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('Severity state: ',state);
    return { severity: null};
}

export default (SeverityLevel);