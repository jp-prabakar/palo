import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWaitingList } from '../../actions';

import HospitalList from  '../../components/illnesses/HospitalList';

class WaitingTime extends React.Component {

    componentDidMount() {
        this.props.fetchWaitingList(this.props.match.params.severity);
    }

    renderTable() {
        console.log('this.props:', this.props);
        if(this.props.waitingList.waitingList != null) {
            console.log('Inside renderTable');
            return this.props.waitingList.waitingList.map( item => {
                return (
                    <tr key={item.id}>
                        <td>{item.levelOfPain}</td>
                        <td>{item.name}</td>
                        <td>{item.averageProcessTime}</td>
                        <td>{item.patientCount}</td>
                        <td>{item.waitingTime}</td>
                    </tr>
                );
            })
        }

        return (
            <div>Loading...</div>
        );
    }

    renderWaitingTime() {

        console.log('Final Waiting List: ',this.props.waitingList.waitingList);

        return (
            <div>
                <div className="ui message">
                    <h2>Waiting Time:</h2>
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Level of pain</th>
                                <th>Hospital</th>
                                <th>Avg process time</th>
                                <th>Patients at waiting list</th>
                                <th>Waiting time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    renderHospitals(hospitals) {
        console.log('hospitals: ', hospitals);
        if (hospitals != null) {
            return hospitals.map( hospital => {
                return (
                    <div>
                        <Link to=''>
                            <div className="ui message">
                                <div>
                                    <div className="ui left aligned container">
                                        <p>{hospital.name}</p>
                                    </div>
                                    <div className="ui right aligned container">
                                        <p> Wait time:  {hospital.waitingTime} mins</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            });
        }

        return (
            <div>Loading...</div>
        )
        
    }

    render() {
        return (
            <div>
                <div>{this.renderWaitingTime()}</div>
                <div></div>
                <div class="ui raised very padded text container segment">
                    <h2>Our suggested Hospitals:</h2>
                    {/* <div className="ui message"> */}
                        {this.renderHospitals(this.props.waitingList.waitingList)}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('WaitingTime: ',state);
    console.log('WaitingTime: ',ownProps);
    return { waitingList: state.illnesses};
}

export default connect(mapStateToProps, { fetchWaitingList })(WaitingTime);