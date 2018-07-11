import React, { Component } from 'react';
import Button from './Button';
import SearchBox from './SearchBox';

class Controls extends Component {


    render() {
        return (
            <div>
                <SearchBox filterSearch = {this.props.filterSearch}/>
                <br />
                <Button filterButton = {this.props.filterButton}/>
            </div>
        );
    }
}

export default Controls;