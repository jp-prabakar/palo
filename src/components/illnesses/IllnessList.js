import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIllnesses } from '../../actions';

class IllnessList extends React.Component {
    componentDidMount() {
        this.props.fetchIllnesses();
    }

    renderIllnessList(illness) {
        return (
            <div>
                <Link to={`/illnesses/severity/${illness.name}`}>
                    <div className="ui message">
                        <div>
                            <div className="ui left aligned container">
                                <p>{illness.name}</p>
                            </div>
                            <div className="ui right aligned container">
                                <p><i className="large right aligned icon pink angle right" /></p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }


    renderIllnesses() {
        if (this.props.illnesses != null) {
            return this.props.illnesses.map( illness => {
                return (
                <div className="item" key={illness.id}>
                    {this.renderIllnessList(illness)}
                </div>
                );
            });
        }

        return (
            <div>Loading...</div>
        )
        
    }

    render() {
        return(
            <div>
                <div className="ui raised very padded text container segment">
                    <h2>Select an illness:</h2>
                    {this.renderIllnesses()}
                </div>
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return { illnesses: Object.values(state.illnesses)};
}

export default connect(mapStateToProps, { fetchIllnesses })(IllnessList);
