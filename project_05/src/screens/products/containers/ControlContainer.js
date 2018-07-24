import React, { Component } from 'react';
import {connect} from 'react-redux';
import Control from '../components/Control';
import * as actions from '../../../actions/index';

class ControlContainer extends Component {
    render() {
        return (
            <Control
                onAddForm = {this.props.onAddForm}
                onFilterProduct = {this.props.onFilterProduct}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddForm: () => {
            dispatch(actions.open_form());
        },
        onFilterProduct: (name) => {
            dispatch(actions.filter_product(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(ControlContainer);