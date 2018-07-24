import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/index';
import Form from '../components/Form';

class FormContainer extends Component {
    render() {
        return (
            <Form
                onCloseForm = {this.props.onCloseForm}
                onAddProduct = {this.props.onAddProduct}
                editProduct = {this.props.editProduct}
                onShowEditProduct = {this.props.onShowEditProduct}
                onEditProduct = {this.props.onEditProduct}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editProduct: state.product
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCloseForm: () => {
            dispatch(actions.close_form())
        },
        onAddProduct: (product) => {
            dispatch(actions.add_product(product))
        },
        onShowEditProduct: (product) => {
            dispatch(actions.show_edit_product(product));
        },
        onEditProduct: (product) => {
            dispatch(actions.edit_product(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);