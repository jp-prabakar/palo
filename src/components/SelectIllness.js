import React from 'react';
import { connect } from 'react-redux';
import { selectIllness } from '../actions';

class SelectIllness extends React.Component {

    render() {
        return <div></div>
    }
}

const mapStateToProps = (state) => {
    return { illness: state}
}

export default connect(mapStateToProps, { selectIllness })(SelectIllness);