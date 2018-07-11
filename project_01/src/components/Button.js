import React, { Component } from 'react';


class Button extends Component {

    filterButton = (name) => {
        this.props.filterButton(name);
    }

    render() {

        let arrButton = [
            {
                name: 'All'
            },
            {
                name: '> 100000'
            },
            {
                name: '<= 100000'
            },
            {
                name: '+'
            }
        ];

        let elmButton = arrButton.map((Button, index) => {
            return <button key = {index} onClick = { () => this.filterButton(Button.name)}>{Button.name}</button>;
        });

        return (
            <div>
                {elmButton}
            </div>
        );
    }
}

export default Button;