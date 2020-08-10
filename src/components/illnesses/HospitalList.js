import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHospitals } from '../../actions';

class HospitalList extends React.Component {
    // componentDidMount() {
    //     this.props.fetchHospitals();
    // }

    renderIHospitalList(hospital) {
        return (
            <div>
                
                {/* <Link to={`/illnesses/severity/${illness.name}`}>
                    <div className="ui message">
                        {illness.name}
                    </div>
                </Link> */}
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
                                {hospital.name}
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
        return(
            <div>
                <h2>Select a hospital:</h2>
                <div className="ui message">
                    {/* {this.renderHospitals(props.hospitals)} */}
                </div>
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return { hospitals: null};
}

export default connect(mapStateToProps, { fetchHospitals })(HospitalList);
