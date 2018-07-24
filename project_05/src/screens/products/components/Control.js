import React, { Component } from 'react';
import Button from '../../../common/Button';

class Control extends Component {

    renderBtn = () => {
        let arrBtns = [
            {
                nameBtn : 'All',
                onClick : (name) => this.props.onFilterProduct(name)
            },
            {
                nameBtn : '<= 100000',
                onClick : (name) => this.props.onFilterProduct(name)
            },
            {
                nameBtn : '> 100000',
                onClick : (name) => this.props.onFilterProduct(name)
            },
            {
                nameBtn : '+',
                onClick : (name) => this.props.onAddForm()
            }
        ]

        return arrBtns.map((Btn, i) => {
            return (
                <Button 
                    key = {i}
                    nameBtn = {Btn.nameBtn}
                    onClick = {Btn.onClick}
                />
            )
        })
    }

    render() {
        return (
            <div>
               {this.renderBtn()} 
            </div>
        );
    }
}

export default Control;